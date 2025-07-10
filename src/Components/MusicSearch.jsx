import { useEffect, useState } from "react";
import Player from "./Player";
import React from "react";
import { useMemo } from "react";
const MusicSearch = () => {
  const [songs, setSongs] = useState([]);
  const [term, setTerm] = useState("Arijit Singh");
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${term}&media=music&limit=12`)

      .then((res) => res.json())
      .then((data) => setSongs(data.results));
      console.log("rerender");
      
  }, [term]);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-white font-bold mb-4">🎧 Music Streamer</h2>
      <input
        type="text"
        placeholder="Search Artist or Song..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="p-2 w-full mb-11 rounded rounded-lg bg-transparent border shadow shadow-green-300 shadow-2xl"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {songs.map((song) => (
          <div
            key={song.trackId}
            onClick={() => setCurrentSong(song)}
            className="bg-white p-2 rounded shadow cursor-pointer hover:bg-gray-100"
          >
            <img src={song.artworkUrl100} alt={song.trackName} className="w-full rounded" />
            <h3 className="mt-2 font-semibold text-sm">{song.trackName}</h3>
            <p className="text-xs text-gray-600">{song.artistName}</p>
          </div>
        ))}
      </div>

      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

export default React.memo(MusicSearch);
