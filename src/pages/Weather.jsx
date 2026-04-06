import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e9cb5a5499f5899c5df8907745a3dfb`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data.weather[0].main);
      } else {
        setWeather("City not found");
      }
    } catch (error) {
      console.error(error); // Log the error
      setWeather("Error fetching data");
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <input
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>
      <p>{weather}</p>
    </div>
  );
}

export default Weather;