import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Strategies from './pages/Strategies';
import ToolsDatabase from './pages/ToolsDatabase';
import Hardware from './pages/Hardware';
import Blockers from './pages/Blockers';
import AssistiveTech from './pages/AssistiveTech';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/tools" element={<ToolsDatabase />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/blockers" element={<Blockers />} />
          <Route path="/assistive-tech" element={<AssistiveTech />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;