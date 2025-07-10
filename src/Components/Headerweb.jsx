import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">🎥 Welcome to FunFlix</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          FunFlix is your one-stop platform for streaming trending YouTube videos, listening to live music, and checking real-time weather — all in a single elegant app. Powered by ReactJS, APIs, and TailwindCSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:scale-105 transition">
          <img src="https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg" alt="YouTube" className="rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">🎬 YouTube Video Stream</h3>
          <p>Search and watch the latest YouTube videos directly inside the app.</p>
          <Link to="/Youtube" className="text-blue-400 hover:underline mt-2 inline-block">Explore Videos</Link>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:scale-105 transition">
          <img src="https://www.shutterstock.com/image-vector/music-streaming-app-interface-ui-260nw-2130836172.jpg" alt="Music" className="rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">🎧 Live Music Search</h3>
          <p>Listen to your favorite tracks and artists using the iTunes API.</p>
          <Link to="/MusicSearch" className="text-blue-400 hover:underline mt-2 inline-block">Search Music</Link>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:scale-105 transition">
          <img src="https://img.freepik.com/free-vector/flat-weather-forecast-interface_23-2149141045.jpg" alt="Weather" className="rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">🌦 Real-Time Weather</h3>
          <p>Get accurate weather updates for your city in real-time.</p>
          <Link to="/Weather" className="text-blue-400 hover:underline mt-2 inline-block">Check Weather</Link>
        </div>
      </div>

      <div className="mt-16 text-center">
        <video
          src="https://cdn.pixabay.com/video/2023/10/02/187045-871345931_large.mp4"
          controls
          className="rounded-lg mx-auto w-full max-w-3xl shadow-2xl"
        />
        <p className="mt-4 text-sm text-gray-400">*Experience FunFlix in action</p>
      </div>
    </div>
  );
};

export default Home;
