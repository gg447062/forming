import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';
import Mint from './Mint';

function App() {
  return (
    <main>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
