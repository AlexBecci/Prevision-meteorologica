import React from "react";
import Spinner from "./Spinner";

function Card({ loadingData, showData, weather, forecast }) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + `/` + month + "/" + year;

  var url = "";
  var iconUrl = "";

  var iconUrl3Hrs = "";
  var iconUrl6Hrs = "";
  var iconUrl9Hrs = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }
  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3Hrs = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6Hrs = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9Hrs = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      "/" +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      "/" +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      "/" +
      forecast.list[3].dt_txt.substring(11, 13);
  }
  return (
    <div>
      {showData === true ? (
        <div className="bg-blue-900 text-white">
          <div>
            <div>
              <h3>{weather.name}</h3>
              <p>{date}</p>
              <h1>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
              <p>
                <img src={iconUrl} alt="iconUrl" />
                {weather.weather[0].description}
              </p>
              <img
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="imageCity"
              />
            </div>
            <div>
              <div>
                <h5>
                  Temperatura maxima:{" "}
                  {(weather.main.temp_max - 273.15).toFixed(1)}°C
                </h5>
                <h5>
                  Temperatura minima:{" "}
                  {(weather.main.temp_min - 273.15).toFixed(1)}°C
                </h5>
                <h5>
                  Sensacion termica:{" "}
                  {(weather.main.feels_like - 273.15).toFixed(1)}°C
                </h5>
                <h5>Humedad: {weather.main.humidity}%</h5>
                <h5>Velocidad del viento: {weather.wind.speed}m/s</h5>
              </div>
              <hr />
              <div>
                <p>{forecastDate3}h</p>
                <p>
                  <img src={iconUrl3Hrs} alt="icon3hrs" />
                  {forecast.list[1].weather[0].description}
                </p>
                <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
              </div>
              <div>
                <p>{forecastDate6}h</p>
                <p>
                  <img src={iconUrl6Hrs} alt="icon3hrs" />
                  {forecast.list[2].weather[0].description}
                </p>
                <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
              </div>
              <div>
                <p>{forecastDate9}h</p>
                <p>
                  <img src={iconUrl9Hrs} alt="icon3hrs" />
                  {forecast.list[3].weather[0].description}
                </p>
                <p>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-black"> sin datos</h2>
      )}
    </div>
  );
}

export default Card;
