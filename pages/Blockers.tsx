import React from 'react';
import { Brain, Users, Smile, Eye, Ear, Clock, Briefcase, Mail, Building, Activity } from 'lucide-react';

const Blockers: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8">
      
      {/* Introduction */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Blockers to Productivity</h1>
        <p className="mt-4 text-xl text-slate-600">Understanding the barriers to academic success and how to overcome them.</p>
      </section>

      {/* Slide 8 */}
      <section className="text-center py-4">
        <h2 className="text-3xl font-bold text-slate-900">What do people need assistance with?</h2>
      </section>

      {/* Slide 9 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Reasons people need assistance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3 font-bold text-slate-800">
                    <Brain className="w-5 h-5 text-indigo-600" /> Cognition
                </div>
                <ul className="text-sm space-y-1 text-slate-600">
                    <li>Decoding (dyslexia)</li>
                    <li>Attention (ADHD)</li>
                    <li>Understanding (SLI)</li>
                </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3 font-bold text-slate-800">
                    <Activity className="w-5 h-5 text-teal-600" /> Organisation
                </div>
                <ul className="text-sm space-y-1 text-slate-600">
                    <li>Cognitive (dyslexia, ADHD)</li>
                    <li>Task-based (dyslexia, ADHD)</li>
                    <li>Physical (dyspraxia)</li>
                </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3 font-bold text-slate-800">
                    <Users className="w-5 h-5 text-blue-600" /> Socialisation
                </div>
                <ul className="text-sm space-y-1 text-slate-600">
                    <li>Social cues (ASD)</li>
                    <li>Convention compliance</li>
                    <li>Extroversion/introversion</li>
                </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3 font-bold text-slate-800">
                    <Smile className="w-5 h-5 text-rose-600" /> Emotion
                </div>
                <ul className="text-sm space-y-1 text-slate-600">
                    <li>Anxiety/depression</li>
                    <li>Sensitivity to stimuli</li>
                    <li>Sense of self worth</li>
                </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3 font-bold text-slate-800">
                    <Eye className="w-5 h-5 text-amber-600" /> Perception
                </div>
                <ul className="text-sm space-y-1 text-slate-600">
                    <li>Accuity</li>
                    <li>Discrimination</li>
                    <li>Inner imagery</li>
                </ul>
            </div>
        </div>
      </section>

      {/* Slide 10 - Venn Diagram Content */}
      <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Neurodiversity Overlap</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                  <h3 className="font-bold text-orange-800">ADHD</h3>
                  <p className="text-slate-700">Attention, Concentration, Planning, Regulating</p>
              </div>
              <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800">Dyslexia</h3>
                  <p className="text-slate-700">Words, Sounds, Memory, Sequencing</p>
              </div>
              <div className="p-4 border border-teal-200 bg-teal-50 rounded-lg">
                  <h3 className="font-bold text-teal-800">Dyspraxia (DCD)</h3>
                  <p className="text-slate-700">Spatial Awareness, Motor-skills, Co-ordination</p>
              </div>
              <div className="p-4 border border-indigo-200 bg-indigo-50 rounded-lg">
                  <h3 className="font-bold text-indigo-800">Autism Spectrum Disorders</h3>
                  <p className="text-slate-700">Social skills, Sensitivity</p>
              </div>
              <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-green-800">Dyscalculia</h3>
                  <p className="text-slate-700">Basic maths, Estimating numbers</p>
              </div>
              <div className="p-4 border border-purple-200 bg-purple-50 rounded-lg md:col-span-2">
                  <h3 className="font-bold text-purple-800">SLI/LD (Center Intersection)</h3>
                  <p className="text-slate-700">Understanding, Speaking</p>
              </div>
          </div>
      </section>

      {/* Slide 11 */}
      <section className="text-center py-6 bg-slate-50 rounded-xl">
          <h2 className="text-2xl font-bold text-slate-800">Everybody’s needs and difficulties are different</h2>
      </section>

      {/* Slide 12, 13, 14 - Perception */}
      <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Perception blockers</h2>
            <div className="flex gap-8 justify-center">
                <div className="flex flex-col items-center">
                    <Eye className="w-10 h-10 text-slate-700 mb-2" />
                    <span className="font-bold">SIGHT</span>
                </div>
                <div className="flex flex-col items-center">
                    <Ear className="w-10 h-10 text-slate-700 mb-2" />
                    <span className="font-bold">HEARING</span>
                </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Perception has a hidden impact on cognition.</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Perception impact on cognition</h3>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow-sm text-center font-medium">Slower processing</div>
                <div className="bg-white p-4 rounded shadow-sm text-center font-medium">Working memory load</div>
                <div className="bg-white p-4 rounded shadow-sm text-center font-medium">Limits organisation</div>
            </div>
          </div>
      </section>

      {/* Slide 15 - Complexity */}
      <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Neurodiversity is not straightforward</h2>
          <div className="flex flex-wrap justify-center gap-4">
             <span className="px-6 py-3 bg-orange-100 text-orange-800 rounded-full font-bold">Permanent</span>
             <span className="px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full font-bold">Situational</span>
             <span className="px-6 py-3 bg-green-100 text-green-800 rounded-full font-bold">Temporary</span>
          </div>
      </section>

      {/* Slide 16 - Microsoft Persona Spectrum */}
      <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Microsoft Inclusive Design Principles</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Sense</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Permanent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Temporary</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Situational</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200 text-sm">
                    <tr>
                        <td className="px-6 py-4 font-bold text-slate-900">Touch</td>
                        <td className="px-6 py-4">One arm</td>
                        <td className="px-6 py-4">Arm injury</td>
                        <td className="px-6 py-4">New parent</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-bold text-slate-900">See</td>
                        <td className="px-6 py-4">Blind</td>
                        <td className="px-6 py-4">Cataract</td>
                        <td className="px-6 py-4">Distracted driver</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-bold text-slate-900">Hear</td>
                        <td className="px-6 py-4">Deaf</td>
                        <td className="px-6 py-4">Ear infection</td>
                        <td className="px-6 py-4">Bartender</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </section>

      {/* Slide 17, 18 - Non-compliance */}
      <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Many more dimensions, so we are really talking about non-compliance more than diversity.</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
             <h3 className="text-xl font-bold text-slate-800 mb-6">Better distinction</h3>
             <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white p-6 rounded-lg shadow-sm">
                     <h4 className="font-bold text-lg mb-3 text-blue-900">Neuro-compliant</h4>
                     <ul className="list-disc list-inside space-y-2 text-slate-700">
                         <li>Can sit still for hours</li>
                         <li>Can focus without breaks</li>
                         <li>Can ignore noise</li>
                     </ul>
                 </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm">
                     <h4 className="font-bold text-lg mb-3 text-purple-900">Neuro-non-compliant</h4>
                     <ul className="list-disc list-inside space-y-2 text-slate-700">
                         <li>Needs breaks</li>
                         <li>Needs to break activities into smaller chunks</li>
                         <li>Needs silence</li>
                     </ul>
                 </div>
             </div>
          </div>
      </section>

      {/* Slide 19 - Compliance is relative */}
      <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Compliance is relative to structure not person</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-lg text-center flex flex-col items-center">
                  <Clock className="w-8 h-8 text-slate-500 mb-2" />
                  <span className="font-medium">9:5 working day</span>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg text-center flex flex-col items-center">
                  <Mail className="w-8 h-8 text-slate-500 mb-2" />
                  <span className="font-medium">Long narrative emails</span>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg text-center flex flex-col items-center">
                  <Building className="w-8 h-8 text-slate-500 mb-2" />
                  <span className="font-medium">Open plan offices</span>
              </div>
          </div>
      </section>

      {/* Slide 20 - Everyone is dyslexic when... */}
      <section className="bg-blue-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Everyone is dyslexic when they are …</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                      <span className="font-bold text-lg">Busy</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                      <Activity className="w-6 h-6" />
                      <span className="font-bold text-lg">Tired</span>
                  </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-6 h-6" />
                      <span className="font-bold text-lg">New</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-blue-100 pl-2">
                      <li>language</li>
                      <li>culture</li>
                      <li>environment</li>
                      <li>subject</li>
                  </ul>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Blockers;