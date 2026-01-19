import React from 'react';
import { strategies } from '../data/content';
import StrategyCard from '../components/StrategyCard';
import { ExternalLink, Brain } from 'lucide-react';

const Strategies: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-6">
           <Brain className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            The Single Principle of Productivity
        </h1>
        <p className="text-xl text-slate-600 mb-6 leading-relaxed">
          There is ultimately only one principle of academic productivity: <strong className="text-slate-900">decreasing cognitive load and increasing fluency</strong>.
        </p>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
           The four "strategies" below are actually four distinct ways to reduce the cognitive load of reading and writing, freeing up your mental energy for understanding and insight.
        </p>
        
        <a 
            href="https://academicreading.edutools.fyi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-white border border-slate-300 rounded-full text-blue-600 font-medium hover:bg-blue-50 hover:border-blue-400 transition-all shadow-sm"
        >
            Read more details at academicreading.edutools.fyi <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {strategies.map((strategy) => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Cognitive Load Theory</h3>
                <p className="text-slate-600 leading-relaxed">
                    By offloading decoding tasks (through text-to-speech) or visual processing (larger fonts), you reduce <em>extraneous</em> load, reserving working memory for <em>intrinsic</em> load (the actual content).
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Fluency</h3>
                <p className="text-slate-600 leading-relaxed">
                    Fluency is the ability to read or write with speed, accuracy, and proper expression. Tools like dictation and outlining remove mechanical friction, allowing thoughts to flow freely.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Accessibility is Productivity</h3>
                <p className="text-slate-600 leading-relaxed">
                    Strategies originally designed for accessibility (like screen readers for visual impairment) turn out to be powerful productivity multipliers for all users by offering multi-modal engagement.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;