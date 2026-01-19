import React, { useState, useMemo } from 'react';
import { tools } from '../data/content';
import ToolCard from '../components/ToolCard';
import { Search, Filter } from 'lucide-react';
import { Category } from '../types';

const ToolsDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = [
    'All',
    'Hardware',
    'Software',
    'eReader',
    'Note-taking',
    'PDF Reader',
    'Reference Manager',
    'Accessibility'
  ];

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
            <h1 className="text-3xl font-bold text-slate-900">Assistive Technologies DB</h1>
            <p className="text-slate-500 mt-1">Browse and compare tools for your workflow</p>
        </div>
        
        {/* Search */}
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <div className="flex items-center mr-2 text-slate-500 text-sm font-medium">
            <Filter className="w-4 h-4 mr-1" /> Filter:
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
          <p className="text-slate-500 text-lg">No tools found matching your criteria.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
      
      <div className="mt-8 text-center text-xs text-slate-400">
        <p>Prices indicated are estimates and subject to change. Always check vendor websites for latest pricing.</p>
      </div>
    </div>
  );
};

export default ToolsDatabase;
