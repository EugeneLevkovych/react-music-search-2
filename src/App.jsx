import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import Header from "./components/Header";

export default function App() {
  const [query, setQuery] = useState("Chick Corea");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeAudio, setActiveAudio] = useState(null);

  
       async function fetchMusic(query) {
         if (!query) return;

        try {
       setLoading(true);
       setError(null);

        const url = `https://api.deezer.com/search?q=${query}`;
        const proxyUrl = `https://proxy.corsfix.com/?${url}`;
        const res = await fetch(proxyUrl);

        const data = await res.json();

        if (data.Response === "False") throw new Error("Music not found");
        console.log(data);
        setTracks(data.data || []);
      } catch (err) {
         console.log(err.message);
         setError(err.message);
        setQuery([]);
      }finally {
      setLoading(false);
    }
    }

    useEffect(function () {
      fetchMusic(query);
      },
    []
    );

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={fetchMusic} query={query} setQuery={setQuery} />
       {loading && <p>Loading...</p>}
       {error && <p>Error: {error}</p>}
       {!loading && !error && tracks.length === 0 && <p>Nothing found.</p>}
      <TrackList tracks={tracks} activeAudio={activeAudio} setActiveAudio={setActiveAudio} />
    </div>
  );
}
