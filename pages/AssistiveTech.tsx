import React from 'react';
import { MessageSquare, DollarSign, Settings, Brain, Heart } from 'lucide-react';

const AssistiveTech: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Assistive Technology</h1>
        <p className="mt-4 text-xl text-slate-600">Understanding the landscape, limitations, and potential of assistive tools.</p>
      </section>

      {/* Slide 5 */}
      <section className="bg-slate-100 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-slate-800">Assistive Technology is not Teaching or Therapeutic Technology</h2>
      </section>

      {/* Slide 6 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What excludes people</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                <h3 className="font-bold text-lg text-slate-900">Language</h3>
            </div>
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                <DollarSign className="w-10 h-10 mx-auto mb-3 text-green-600" />
                <h3 className="font-bold text-lg text-slate-900">Money</h3>
            </div>
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Settings className="w-10 h-10 mx-auto mb-3 text-slate-600" />
                <h3 className="font-bold text-lg text-slate-900">Complexity</h3>
            </div>
        </div>
      </section>

      {/* Slide 7 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">The problem with Assistive Technology</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-red-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-100 rounded-lg">
                        <Heart className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900">Assistive Technology</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">Narrow</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">Expensive</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">Special</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-green-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-100 rounded-lg">
                        <Brain className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900">Productivity Tools</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">General</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">Cheap</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">Ubiquitous</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AssistiveTech;