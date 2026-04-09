import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "0e9cb5a5499f5899c5df8907745a3dfb";

  const getWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
    }
  };

  return (
    <div className="weather">
  <h1>Weather</h1>

  
  <input
    type="text"
    placeholder="Enter city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="weather-input"
  />

  <button className="weather-button" onClick={getWeather}>
    Search
  </button>

  {weather && weather.main && (
    <div className="card">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} &deg;C</p>
      <p>Weather: {weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  )}
</div>
  );
}

export default Weather;