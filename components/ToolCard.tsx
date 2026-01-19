import React, { useState } from 'react';
import { Tool } from '../types';
import { Check, X, Tag, Globe, Loader2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<{ text: string; sources: { title: string; uri: string }[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (isExpanded && searchData) {
      setIsExpanded(false);
      return;
    }

    setIsExpanded(true);
    
    if (searchData) return; // Already fetched

    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Research the current status, pricing, reviews, and key features for "${tool.name}" (${tool.category}). Provide a concise summary helpful for academic productivity decisions.`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "No specific information found.";
      
      // Extract grounding metadata
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = chunks
        .map((chunk: any) => chunk.web)
        .filter((web: any) => web)
        .map((web: any) => ({ title: web.title, uri: web.uri }));

      setSearchData({ text, sources });
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to load current information. Please check your connection or API key.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-2" />;
      
      // Simple bold formatting for **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start ml-2 mb-1">
            <span className="mr-2 text-slate-400">•</span>
            <span className="text-slate-700 text-sm">{content}</span>
          </div>
        );
      }
      
      return <p key={idx} className="text-slate-700 text-sm mb-2">{content}</p>;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide text-blue-800 uppercase bg-blue-100 rounded-full">
            {tool.category}
          </span>
          <span className="text-sm font-medium text-slate-500">
            {tool.cost}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.name}</h3>
        <p className="text-slate-600 text-sm mb-4">{tool.description}</p>
        
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <h4 className="text-xs font-semibold text-green-700 uppercase mb-2 flex items-center">
               Pros
            </h4>
            <ul className="space-y-1">
              {tool.pros.slice(0, 3).map((pro, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start">
                  <Check className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-red-700 uppercase mb-2 flex items-center">
               Cons
            </h4>
            <ul className="space-y-1">
              {tool.cons.slice(0, 3).map((con, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start">
                  <X className="w-3 h-3 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Search Section */}
      <div className={`border-t border-slate-100 bg-slate-50 transition-all duration-300 ${isExpanded ? 'bg-blue-50/50' : ''}`}>
        <button 
          onClick={handleSearch}
          className="w-full px-6 py-3 flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            {isExpanded ? 'Hide current info' : 'Search for current info'}
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <div className="px-6 pb-6 pt-2 border-t border-blue-100/50">
            {isLoading ? (
              <div className="flex items-center justify-center py-8 text-blue-600">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm">Searching live data...</span>
              </div>
            ) : error ? (
              <div className="text-red-500 text-sm py-2">{error}</div>
            ) : searchData ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                   {renderFormattedText(searchData.text)}
                </div>
                
                {searchData.sources.length > 0 && (
                  <div>
                    <h5 className="text-xs font-semibold text-slate-500 uppercase mb-2">Sources</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {searchData.sources.map((source, idx) => (
                        <a 
                          key={idx}
                          href={source.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs text-blue-600 hover:underline truncate"
                        >
                          <ExternalLink className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{source.title || source.uri}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="text-[10px] text-slate-400 text-right">
                  Generated by Gemini 2.5 Flash
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="bg-white px-6 py-3 border-t border-slate-100">
        <div className="flex flex-wrap gap-2">
          {tool.relatedStrategies.map((strat) => (
            <span key={strat} className="inline-flex items-center text-xs text-slate-500">
              <Tag className="w-3 h-3 mr-1" />
              {strat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;