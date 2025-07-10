import { useEffect, useRef } from "react";
import React from "react";

const Player = ({ song }) => {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current?.play();
  }, [song]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <img src={song.artworkUrl60} alt={song.trackName} className="w-12 h-12 rounded" />
        <div>
          <h4 className="font-semibold">{song.trackName}</h4>
          <p className="text-sm text-gray-400">{song.artistName}</p>
        </div>
      </div>

      <audio ref={audioRef} controls src={song.previewUrl} className="w-72" />
    </div>
  );
};

export default Player;
