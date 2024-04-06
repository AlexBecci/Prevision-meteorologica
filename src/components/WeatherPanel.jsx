import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import axios from 'axios';

function WeatherPanel() {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?&appid=2c94e7ebbb7a25de68c6815d19b9975e&lang=es";
  let urlCity = `&q=`;
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?&appid=2c94e7ebbb7a25de68c6815d19b9975e&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);
    console.log('localidad, ', loc)
    //Weather
    urlWeather = urlWeather + urlCity + loc;
    //Apifetch
    /* await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((wheaterData) => {
        console.log(wheaterData);
        setWeather(wheaterData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      }); */
    /* MANERA NUEVA */
    try {
      const response = await axios.get(urlWeather);
      console.log(response)
      const weatherData = response.data;
      console.log(weatherData);
      setWeather(weatherData);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
    //Forecast
    urlForecast = urlForecast + urlCity + loc;

    //Fetch
    /* await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      }); */
    /* Manera nueva */
    try {
      const response = await axios.get(urlForecast);
      if (!response.data.ok) throw { response };
      const forecastData = response.data.json();
      console.log(forecastData);
      setForecast(forecastData);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <React.Fragment>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
}

export default WeatherPanel;
