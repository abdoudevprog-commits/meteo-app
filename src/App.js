import { useState } from "react";
import SearchBar from "./components/navbar";
import WeatherCard from "./components/weathercard"; 
import "./App.css";

function App() {
  const [ville, setVille] = useState("");
  const [meteo, setMeteo] = useState(null);

  async function onSearch() {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${ville}&count=1&language=fr`,
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
      alert("Ville introuvable !");
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const meteoRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`,
    );
    const meteoData = await meteoRes.json();
    const cur = meteoData.current;

    setMeteo({
      ville: `${name}, ${country}`,
      temperature: Math.round(cur.temperature_2m),
      ressenti: Math.round(cur.apparent_temperature),
      humidite: cur.relative_humidity_2m,
      vent: Math.round(cur.wind_speed_10m),
      condition: "Ensoleillé",
    });
    
  }

  return (
    <div className="app">
      <h2>Météo</h2>
      <SearchBar ville={ville} setVille={setVille} onSearch={onSearch} />
      <WeatherCard meteo={meteo} />
    </div>
  );
}

export default App;
