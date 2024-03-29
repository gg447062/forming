import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Apply from './Apply';
import FAQ from './FAQ';
import Mint from './Mint';
import { DataContext, setStorage } from '../data-context';

function App() {
  const { rsvp, setRsvp, volume, setVolume, date, setDate, flyer, setFlyer } =
    useContext(DataContext);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/api/data');
      const _rsvp = data.RSVP.checkbox;
      const _volume = data.Volume.number;
      const _date = data.Date.rich_text[0].plain_text;
      const _flyer = data.Flyer.files[0].file.url;

      if (
        _rsvp !== rsvp ||
        _volume !== volume ||
        _date !== date ||
        _flyer !== flyer
      ) {
        setRsvp(_rsvp);
        setVolume(_volume);
        setDate(_date);
        setFlyer(_flyer);
        setStorage({
          rsvp: _rsvp,
          volume: _volume,
          date: _date,
          flyer: _flyer,
        });
      }
    }
    getData();
  }, []);

  return (
    <main>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
