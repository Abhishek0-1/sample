import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SkeletonCard = () => (
  <div className="animate-pulse bg-white rounded shadow p-2">
    <div className="bg-gray-300 h-48 w-full rounded"></div>
    <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="mt-1 h-3 bg-gray-300 rounded w-1/2"></div>
  </div>
);

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "AIzaSyAbUocyT80MP1U6cwbLqQ2JlF6KWqr7pzk"; 
  
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=reactjs&type=video&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items);
      } catch (err) {
        console.error("API fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="my-11">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {loading
          ? Array(12).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : videos.map((video) => (
              <Link
                to={`/watch/${video.id.videoId}`}
                key={video.id.videoId}
                className="bg-white rounded shadow block"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full"
                />
                <div className="p-2">
                  <h2 className="font-semibold">{video.snippet.title}</h2>
                  <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Youtube;
