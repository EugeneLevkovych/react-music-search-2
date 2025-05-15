import { createContext, useState } from "react";

export const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [activeAudio, setActiveAudio] = useState(null);

  return (
    <AudioContext.Provider value={{ activeAudio, setActiveAudio }}>
      {children}
    </AudioContext.Provider>
  );
}
