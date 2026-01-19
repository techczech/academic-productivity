import React from 'react';
import { Strategy } from '../types';
import { Headphones, ZoomIn, ListTree, Mic } from 'lucide-react';

interface StrategyCardProps {
  strategy: Strategy;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Headphones': return <Headphones className="w-8 h-8 text-blue-600" />;
      case 'ZoomIn': return <ZoomIn className="w-8 h-8 text-purple-600" />;
      case 'ListTree': return <ListTree className="w-8 h-8 text-teal-600" />;
      case 'Mic': return <Mic className="w-8 h-8 text-rose-600" />;
      default: return <Headphones className="w-8 h-8" />;
    }
  };

  const getColorClass = (name: string) => {
    switch (name) {
      case 'Headphones': return 'border-l-4 border-blue-500';
      case 'ZoomIn': return 'border-l-4 border-purple-500';
      case 'ListTree': return 'border-l-4 border-teal-500';
      case 'Mic': return 'border-l-4 border-rose-500';
      default: return 'border-l-4 border-gray-500';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ${getColorClass(strategy.iconName)}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-50 rounded-full">
          {getIcon(strategy.iconName)}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{strategy.title}</h3>
      </div>
      
      <p className="text-slate-600 mb-6 leading-relaxed">
        {strategy.fullDescription}
      </p>

      <div className="bg-slate-50 rounded-md p-4">
        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Actionable Steps</h4>
        <ul className="space-y-2">
          {strategy.actionItems.map((item, idx) => (
            <li key={idx} className="flex items-start text-sm text-slate-700">
              <span className="mr-2 text-blue-500 font-bold">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StrategyCard;
