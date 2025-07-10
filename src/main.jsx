import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Headerweb from "./Components/Headerweb.jsx";
import Youtube from "./Components/Youtube.jsx";
import Watchvideo from "./Components/Watchvideo.jsx";
import MusicSearch from "./Components/MusicSearch.jsx";
import Weather from "./Components/Weather.jsx";

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Headerweb" element={<Headerweb />} />
      <Route path="/Youtube" element={<Youtube />} />
      <Route path="/Weather" element={<Weather />} />
      <Route path="/MusicSearch" element={<MusicSearch />} />
      <Route path="/watch/:id" element={<Watchvideo />} />
    </Route>
  )
);

   

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
