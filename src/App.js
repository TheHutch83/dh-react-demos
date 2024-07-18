import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState();
  const [location] = useState("London");

  const getWeather = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},UK&appid=3da8a0c7ed934203261619eac46bb437`
    );
    setWeather(data);
  }, [location]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  console.log(weather);

  if (!weather) return <p>Loading...</p>;

  return (
    <>
      <p>{Math.round(weather.main.temp - 273.15)}</p>
    </>
  );
};

export default App;
