import { useState } from "react";

const API_KEY = "6ArvcMd5M4giyWxp9pRFQYezczp4fbX5";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        if (!city) return;
        setLoading(true);
        try {
            const res = await fetch(
                `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`
            );
            const data = await res.json();
            setWeather(data);
        } catch (err) {
            console.error("Failed to fetch weather", err);
            setWeather(null);
        } finally {
            setLoading(false);
        }
        console.log(weather);

    };

    return (
        <div className="min-h-screen   p-4 bg-gradient-to-br flex flex-col items-center
         text-white" style={{
                backgroundImage: "url('https://img.freepik.com/free-vector/digital-cloud-pattern-background-connection-technology_53876-119493.jpg?t=st=1751865862~exp=1751869462~hmac=ecdb137daacc4a0c84301fe97f4e8e74b774eb3ee430b37a770493bbe2a538ea&w=1380')"
            }}>
            <h2 className="text-3xl font-bold mb-4">🌦 Weather Report</h2>

            <div className="mb-4 w-200 flex gap-2">
                <input
                    type="text"
                    placeholder="Enter city name (e.g., Bhopal)"
                    className="p-2 w-full border  rounded shadow shadow-2xl  shadow-white "
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    onClick={fetchWeather}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>

            {loading && <p>Loading...</p>}

            {weather?.data?.values && (
                <div className="  text-white w-200 p-4 rounded shadow  text-2xl gap-11 flex flex-col ">
                    <h3 className="text-xl font-bold mb-2">📍 {city}</h3>
                    <p>🌡 Temp: {weather.data.values.temperature}°C</p>
                    <p>💧 Humidity: {weather.data.values.humidity}%</p>
                    <p>🌬 Wind: {weather.data.values.windSpeed} m/s</p>
                    <p>☁ Cloud Cover: {weather.data.values.cloudCover}%</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
