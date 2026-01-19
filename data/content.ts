import { Tool, Strategy } from '../types';

export const strategies: Strategy[] = [
  {
    id: 'Listen',
    title: 'Listen: Read with your ears',
    shortDescription: 'Listen instead of reading or while reading to improve concentration and comprehension.',
    fullDescription: 'Listening to text helps slower readers speed up, reduces eye strain, and improves understanding. It is also a powerful tool for proofreading your own writing to catch errors that eyes might skip over.',
    actionItems: [
      'Use Read Aloud in Microsoft Edge & Office.',
      'Listen to PDFs with Voice Dream Reader.',
      'Use text-to-speech for proofreading drafts.',
      'Crop headers/footers in PDFs for smoother listening.'
    ],
    iconName: 'Headphones'
  },
  {
    id: 'Enlarge',
    title: 'Enlarge: Speed up reading',
    shortDescription: 'Reduce visual clutter and increase font size to reduce cognitive load.',
    fullDescription: 'The smaller the font, the more effort is spent on decoding. Increasing font size, line spacing, and reducing line length can significantly speed up reading and reduce mental fatigue.',
    actionItems: [
      'Use Immersive Reader in Edge/OneNote.',
      'Reflow PDFs on mobile devices.',
      'Increase zoom level on browser pages.',
      'Use "Liquid Mode" in Adobe Acrobat.'
    ],
    iconName: 'ZoomIn'
  },
  {
    id: 'Outline',
    title: 'Outline and Navigate',
    shortDescription: 'See the bigger picture using outlines, navigation panes, and mind maps.',
    fullDescription: 'Understanding the structure of a text helps strategic reading. Using Heading Styles in Word allows for navigation, automatic table of contents, and better accessibility.',
    actionItems: [
      'Use the Navigation Pane in Word.',
      'Apply Heading Styles (H1, H2, H3) rigorously.',
      'Create mind maps to visualize complex concepts.',
      'Scan headings and lists before deep reading.'
    ],
    iconName: 'ListTree'
  },
  {
    id: 'Dictate',
    title: 'Dictate',
    shortDescription: 'Save your hands and improve spelling by speaking your text.',
    fullDescription: 'Dictation technology is now highly accurate and free. It reduces physical strain and helps formulate complex thoughts without the barrier of typing and spelling mechanics.',
    actionItems: [
      'Use Dictate in Microsoft Office (Alt + `).',
      'Use Windows Dictation (Win + H).',
      'Use Voice Typing in Google Docs.',
      'Speak in complete sentences and review by listening.'
    ],
    iconName: 'Mic'
  }
];

export const tools: Tool[] = [
  // Hardware - Laptops & General
  {
    id: 'laptop-generic',
    name: 'Modern Laptop',
    description: 'Any laptop from a reputable manufacturer (Dell, HP, Apple, etc.) capable of running assistive tech.',
    category: 'Hardware',
    cost: '£400 - £1200+',
    pros: ['General purpose', 'Essential for university', 'Runs full desktop software'],
    cons: ['Battery life varies', 'Can be heavy', 'Expensive'],
    relatedStrategies: ['Outline', 'Dictate', 'Enlarge']
  },
  // Hardware - Tablets/eReaders
  {
    id: 'ipad-pro',
    name: 'iPad Pro (12.9in)',
    description: 'Large tablet great for combining reading, writing, and taking notes by hand.',
    category: 'Hardware',
    cost: '£1000+',
    pros: ['Large screen for A4 PDFs', 'Powerful ecosystem', 'Great for creative work'],
    cons: ['Very expensive', 'Heavy', 'Screen glare', 'Battery life lower than eInk'],
    relatedStrategies: ['Enlarge', 'Listen']
  },
  {
    id: 'remarkable-2',
    name: 'reMarkable 2',
    description: 'Distraction-free eInk tablet for reading and handwriting.',
    category: 'eReader',
    cost: '£360 - £480',
    pros: ['Paper-like feel', 'No eye strain', 'Long battery life', 'Distraction free'],
    cons: ['No backlight', 'No apps/web browsing', 'Proprietary sync'],
    relatedStrategies: ['Outline']
  },
  {
    id: 'kobo-elipsa',
    name: 'Kobo Elipsa',
    description: 'eReader and note-taker with stylus and public library access.',
    category: 'eReader',
    cost: '£350',
    pros: ['Illuminated screen', 'Overdrive (Library) support', 'Cheaper than iPad'],
    cons: ['Plastic build', 'No app store', ' bulky case'],
    relatedStrategies: ['Enlarge']
  },
  {
    id: 'onyx-boox-lumi',
    name: 'Onyx Boox Max Lumi',
    description: 'Massive 13.3in eInk Android tablet suitable for A4 documents.',
    category: 'eReader',
    cost: '£800',
    pros: ['A4 size at 100%', 'Android Apps support', 'Can be external monitor'],
    cons: ['Very expensive', 'Niche product'],
    relatedStrategies: ['Enlarge', 'Listen']
  },
  // Hardware - Accessibility
  {
    id: 'c-pen-connect',
    name: 'C-Pen Connect',
    description: 'Digital highlighter that scans text to your phone/computer.',
    category: 'Accessibility',
    cost: '£120',
    pros: ['Scans directly to digital', 'Portable', 'Good OCR'],
    cons: ['Line-by-line scanning only', 'Requires connected device'],
    relatedStrategies: ['Listen']
  },
  {
    id: 'ruby-10',
    name: 'Ruby 10 Magnifier',
    description: 'Digital magnifier with text-to-speech for visually impaired users.',
    category: 'Accessibility',
    cost: '£1800',
    pros: ['High contrast', 'Tactile buttons', 'Read aloud function'],
    cons: ['Extremely expensive', 'Bulky'],
    relatedStrategies: ['Enlarge', 'Listen']
  },
  // Software - Note taking
  {
    id: 'onenote',
    name: 'Microsoft OneNote',
    description: 'Digital notebook supporting text, images, ink, and audio.',
    category: 'Note-taking',
    cost: 'Free',
    pros: ['Infinite canvas', 'Excellent ink support', 'Deep Office integration'],
    cons: ['Organization can get messy', 'Sync issues occasionally'],
    relatedStrategies: ['Outline', 'Dictate']
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, databases, and project management.',
    category: 'Note-taking',
    cost: 'Freemium',
    pros: ['Powerful databases', 'Flexible layout', 'Web publishing'],
    cons: ['No offline mode', 'Steep learning curve', 'No ink support'],
    relatedStrategies: ['Outline']
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    description: 'Knowledge base that works on top of a local folder of Markdown files.',
    category: 'Note-taking',
    cost: 'Free (Sync is paid)',
    pros: ['Local files', 'Graph view of connections', 'Extremely customizable'],
    cons: ['Requires learning Markdown', 'Sync is paid'],
    relatedStrategies: ['Outline']
  },
  // Software - Reference & Reading
  {
    id: 'zotero',
    name: 'Zotero',
    description: 'Free reference manager that helps collect, organize, cite, and share research.',
    category: 'Reference Manager',
    cost: 'Free',
    pros: ['Open source', 'Great web clipper', 'Integrated PDF reader'],
    cons: ['Storage limits for free tier', 'Dated UI'],
    relatedStrategies: ['Outline']
  },
  {
    id: 'voice-dream',
    name: 'Voice Dream Reader',
    description: 'Top-tier text-to-speech app for mobile devices.',
    category: 'PDF Reader',
    cost: '£25',
    pros: ['Best-in-class TTS', 'Visual customization', 'Works with many formats'],
    cons: ['Expensive for an app', 'No desktop version'],
    relatedStrategies: ['Listen', 'Enlarge']
  },
  {
    id: 'liquid-text',
    name: 'LiquidText',
    description: 'PDF reader for iPad focusing on connecting ideas and distinct excerpts.',
    category: 'PDF Reader',
    cost: 'Freemium',
    pros: ['Unique workspace UI', 'Great for connecting concepts'],
    cons: ['Expensive subscriptions', 'Non-standard interface'],
    relatedStrategies: ['Outline']
  },
  // Software - Native Features
  {
    id: 'immersive-reader',
    name: 'Immersive Reader',
    description: 'Microsoft tool to remove distractions and read text aloud.',
    category: 'Accessibility',
    cost: 'Free',
    pros: ['Built into Edge/Word', 'Grammar tools', 'Distraction free'],
    cons: ['Inconsistent across apps', 'Online required for some voices'],
    relatedStrategies: ['Listen', 'Enlarge']
  },
  {
    id: 'read-aloud',
    name: 'Read Aloud',
    description: 'Text-to-speech feature in Microsoft Edge and Office.',
    category: 'Accessibility',
    cost: 'Free',
    pros: ['Natural voices', 'Zero setup', 'Highlights text as it reads'],
    cons: ['Requires internet for best voices'],
    relatedStrategies: ['Listen']
  }
];
