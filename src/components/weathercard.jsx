function Weathercard({ meteo }) {
  if (!meteo) return null;

  return (
    <div className="card">
      <h2>{meteo.ville}</h2>
      <p>🌡️ Température : {meteo.temperature}°C</p>
      <p>🤔 Ressenti : {meteo.ressenti}°C</p>
      <p>💧 Humidité : {meteo.humidite}%</p>
      <p>💨 Vent : {meteo.vent} km/h</p>
      <p>☀️ Condition : {meteo.condition}</p>
    </div>
  );
}

export default Weathercard;
