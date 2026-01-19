import React from 'react';
import { Laptop, Smartphone, Tablet, Eye } from 'lucide-react';

const Hardware: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Hardware Decisions for Productive Study</h1>
        <p className="mt-4 text-lg text-slate-600">
          Choosing the right hardware is crucial. It depends on your personal situation, study strategies (reading vs listening), and specific needs.
        </p>
      </div>

      {/* Decision Matrix */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-800">Quick Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Device Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Best For</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Trade-offs</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200 text-sm">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2"><Laptop className="w-4 h-4"/> Computers</td>
                <td className="px-6 py-4 text-slate-600">Writing, General Computing, heavy multitasking</td>
                <td className="px-6 py-4 text-slate-500">Not ideal for long reading, limited battery compared to tablets</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2"><Tablet className="w-4 h-4"/> Tablets</td>
                <td className="px-6 py-4 text-slate-600">Reading PDFs, annotating by hand, watching lectures</td>
                <td className="px-6 py-4 text-slate-500">More expensive for "Pro" features, screen glare</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2"><Tablet className="w-4 h-4 text-slate-400"/> eReaders</td>
                <td className="px-6 py-4 text-slate-600">Distraction-free reading, outdoor reading</td>
                <td className="px-6 py-4 text-slate-500">Single purpose, often slow, black & white mostly</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2"><Smartphone className="w-4 h-4"/> Phones</td>
                <td className="px-6 py-4 text-slate-600">Audiobooks, podcasts, quick capture</td>
                <td className="px-6 py-4 text-slate-500">Screen too small for serious academic reading</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Buying Advice */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Laptop Requirements</h2>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <ul className="space-y-3 text-slate-700">
                    <li><strong>RAM:</strong> 8GB minimum, 16GB highly recommended for multitasking.</li>
                    <li><strong>Storage:</strong> 256GB SSD minimum. Avoid eMMC or HDD.</li>
                    <li><strong>Screen:</strong> Touch screen is worth the extra expense for accessibility.</li>
                    <li><strong>Platform:</strong> Mac is great but expensive. Windows offers better touch support.</li>
                </ul>
            </div>
        </div>
        <div className="space-y-4">
             <h2 className="text-2xl font-bold text-slate-800">Don't forget Accessories</h2>
             <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <ul className="space-y-3 text-slate-700 list-disc list-inside">
                    <li><strong>Stylus:</strong> Essential for annotating on tablets.</li>
                    <li><strong>Cases/Covers:</strong> Protect your investment.</li>
                    <li><strong>Screen Covers:</strong> Matte/Paper-like covers reduce glare.</li>
                    <li><strong>Ergonomics:</strong> Laptop stand and external keyboard for long sessions.</li>
                </ul>
             </div>
        </div>
      </div>

       <div className="bg-slate-900 text-white p-8 rounded-xl flex items-start gap-4">
            <Eye className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-bold mb-2">Visual Impairment Support</h3>
                <p className="text-slate-300">
                    For students needing magnification, devices like the <strong>Ruby 10</strong> or <strong>C-Pen</strong> scanners can be life-changing. 
                    However, many software features (like Immersive Reader) built into standard laptops now bridge this gap for free.
                </p>
            </div>
       </div>
    </div>
  );
};

export default Hardware;
