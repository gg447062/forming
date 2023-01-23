import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Apply from './Apply';
import FAQ from './FAQ';
import Mint from './Mint';
import { DataContextProvider } from '../data-context';

function App() {
  return (
    <main>
      <DataContextProvider>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mint" element={<Mint />} />
          </Routes>
        </Router>
      </DataContextProvider>
    </main>
  );
}
export default App;
