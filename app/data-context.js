import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DATA_CACHE = 'DATA_CACHE';

function checkStorage() {
  const data = window.localStorage.getItem(DATA_CACHE);
  if (data) {
    return JSON.parse(data);
  } else {
    return false;
  }
}

export function setStorage(data) {
  localStorage.setItem(DATA_CACHE, JSON.stringify(data));
}

export function DataContextProvider({ children }) {
  const data = checkStorage();
  const _rsvp = data ? data.rsvp : false;
  const _volume = data ? data.volume : null;

  const [rsvp, setRsvp] = useState(_rsvp);
  const [volume, setVolume] = useState(_volume);

  const state = { rsvp, setRsvp, volume, setVolume };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}
