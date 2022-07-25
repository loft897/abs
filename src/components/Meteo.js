import React, { useState } from "react";
import axios from "axios";

function Meteo() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=yaounde&units=metric&appid=895284fb2d2c50a520ea537456963d9c`,
      console.log(fetchWeather)
    );
    updateWeather(response.data);
  };
  return <div>gb</div>;
}

export default Meteo;
