import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [rsvp, setRsvp] = useState(false);
  const [volume, setVolume] = useState(null);

  const state = { rsvp, setRsvp, volume, setVolume };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}
