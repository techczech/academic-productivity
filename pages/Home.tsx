import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BookOpen, BrainCircuit, Cpu, Database, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Tools for <span className="text-blue-600">Academic Productivity</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
          A comprehensive resource on productivity strategies, neurodiversity blockers, and the transition from specialized assistive technology to universal productivity tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/strategies"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
          >
            Start with Strategies <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            to="/tools"
            className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
          >
            Browse Database
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Strategies */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
            <Brain className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Strategies</h3>
          <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
             Productivity comes from decreasing cognitive load. Discover 4 ways to achieve this: Listen, Enlarge, Outline, and Dictate.
          </p>
          <Link to="/strategies" className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center mt-auto">
            Learn the principles <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>

        {/* Blockers */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
            <BrainCircuit className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Blockers & Neurodiversity</h3>
          <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
            Understand how cognition, perception, and environment interact to create barriers, and how "compliance" impacts productivity.
          </p>
          <Link to="/blockers" className="text-rose-600 font-medium hover:text-rose-700 inline-flex items-center mt-auto">
            Understand blockers <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>

        {/* Assistive Tech Primer */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <Cpu className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">The Assistive Tech Landscape</h3>
          <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
            Why traditional "Assistive Tech" is often too narrow and expensive, and how general productivity tools offer a more inclusive solution.
          </p>
          <Link to="/assistive-tech" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center mt-auto">
            Read the primer <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>

        {/* Tools & Hardware */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Database className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Tools & Hardware DB</h3>
          <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
            Search our database of apps (Zotero, Obsidian) and hardware (Laptops, eReaders) matched to specific productivity needs.
          </p>
          <div className="flex gap-4 mt-auto">
             <Link to="/tools" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                Software <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
            <Link to="/hardware" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                Hardware Guide <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>

      </section>

      {/* Quote/CTA */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          "Everyone is dyslexic when they are busy, tired, or new."
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          The distinction between neuro-compliant and neuro-non-compliant is often defined by the environment, not the person.
        </p>
      </section>
    </div>
  );
};

export default Home;