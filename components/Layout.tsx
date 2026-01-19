import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, PenTool, ShieldAlert, Home, Database, Cpu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-2" /> },
    { name: 'Strategies', path: '/strategies', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: 'Blockers', path: '/blockers', icon: <ShieldAlert className="w-4 h-4 mr-2" /> },
    { name: 'Assistive Tech', path: '/assistive-tech', icon: <Cpu className="w-4 h-4 mr-2" /> },
    { name: 'Tools DB', path: '/tools', icon: <Database className="w-4 h-4 mr-2" /> },
    { name: 'Hardware', path: '/hardware', icon: <PenTool className="w-4 h-4 mr-2" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    A
                  </div>
                  <span className="font-bold text-slate-800 text-lg hidden sm:block">Academic Productivity</span>
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-4 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="pt-2 pb-3 space-y-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-3 py-4 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">About</h3>
              <p className="text-sm leading-relaxed">
                Based on resources developed by Dominik Lukeš for the Reading and Writing Innovation Lab. 
                Dedicated to helping students and academics improve their digital workflows.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Key Sections</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/strategies" className="hover:text-white transition-colors">Productivity Strategies</Link></li>
                <li><Link to="/blockers" className="hover:text-white transition-colors">Blockers to Productivity</Link></li>
                <li><Link to="/assistive-tech" className="hover:text-white transition-colors">Assistive Technology</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">License</h3>
              <p className="text-sm">
                Licensed under Creative Commons Attribution 4.0 International License.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Academic Productivity Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;