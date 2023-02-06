import React from "react";
import Spinner from "./Spinner";
import img1 from "../assets/img/Ejemplo1.png";
import img2 from "../assets/img/Ejemplo2.png";

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
        <section className="body-font overflow-hidden font-bold shadow-md">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-blue-500 tracking-widest">
                  {date}
                </h2>
                <h1 className="text-zinc-50 text-4xl title-font font-bold mb-4">
                  {weather.name}
                </h1>
                <h2 className="text-2xl title-font text-yellow-500 tracking-widest">
                  <p>
                    <img src={iconUrl} alt="iconUrl" />
                  </p>
                  {(weather.main.temp - 273.15).toFixed(1)}°C
                </h2>
                <p className="leading-relaxed mb-4 text-lg text-zinc-50">
                  {weather.weather[0].description}
                </p>
                <div className="flex mb-4">
                  <p className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-xl px-1 text-center justify-center mx-32">
                    Clima
                  </p>
                </div>
                <div className="flex border-t border-yellow-500 py-3 mx-6">
                  <span className="text-zinc-200">Temperatura máxima</span>
                  <span className="ml-auto text-blue-500">
                    {(weather.main.temp_max - 273.15).toFixed(1)}°C
                  </span>
                </div>
                <div className="flex border-t border-yellow-500 py-3 mx-6">
                  <span className="text-zinc-200">Temperatura mínima:</span>
                  <span className="ml-auto text-blue-500">
                    {(weather.main.temp_min - 273.15).toFixed(1)}°C
                  </span>
                </div>
                <div className="flex border-t  border-yellow-500 py-3 mx-6">
                  <span className="text-zinc-200">Sensación térmica</span>
                  <span className="ml-auto text-blue-500">
                    {(weather.main.feels_like - 273.15).toFixed(1)}°C
                  </span>
                </div>
                <div className="flex border-t  border-yellow-500 py-3 mx-6">
                  <span className="text-zinc-200">Humedad</span>
                  <span className="ml-auto text-blue-500">
                    {weather.main.humidity}%
                  </span>
                </div>
                <div className="flex border-t border-b border-yellow-500 py-3 mx-6">
                  <span className="text-zinc-200">Velocidad del viento</span>
                  <span className="ml-auto text-blue-500">
                    {weather.wind.speed}m/s
                  </span>
                </div>
              </div>
              <img
                alt="ecommerce"
                className="shadow-md shadow-black rounded-3xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center"
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <section className="text-gray-600 body-font font-bold">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-yellow-500"
                        src={iconUrl3Hrs}
                      />
                      <h2 className="text-yellow-500 title-font tracking-wider text-sm">
                        {forecastDate3}h
                      </h2>
                      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                      <h2 className="text-zinc-200 title-font tracking-wider text-sm">
                        {(forecast.list[1].main.temp - 273.15).toFixed(1)}°C
                      </h2>
                      <p className="text-zinc-200">
                        {forecast.list[1].weather[0].description}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-yellow-500"
                        src={iconUrl6Hrs}
                      />
                      <h2 className="text-yellow-500 title-font tracking-wider text-sm">
                        {forecastDate6}h
                      </h2>
                      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                      <h2 className="text-zinc-200 title-font tracking-wider text-sm">
                        {(forecast.list[2].main.temp - 273.15).toFixed(1)}°C
                      </h2>
                      <p className="text-zinc-200">
                        {forecast.list[2].weather[0].description}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-yellow-500"
                        src={iconUrl9Hrs}
                      />
                      <h2 className="text-yellow-500 title-font tracking-wider text-sm">
                        {forecastDate9}h
                      </h2>
                      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                      <h2 className="text-zinc-200 title-font tracking-wider text-sm">
                        {(forecast.list[3].main.temp - 273.15).toFixed(1)}°C
                      </h2>
                      <p className="text-zinc-200">
                        {forecast.list[3].weather[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : (
        <section className="text-blue-500 body-font mt-12">
          <div className="container px-5 py-44 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <h2 className="title-font text-2xl font-bold  my-10">
                  Ejemplo de como buscar
                </h2>
                <div className="rounded-lg h-64 shadow-lg shadow-black rounded-2 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center lg:h-full lg:w-full h-40 w-full"
                    src={img1}
                  />
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <h2 className="title-font text-2xl font-bold  my-10">
                  Ejemplo de lo que se tendría que mostrar
                </h2>
                <div className="rounded-lg h-64 shadow-lg shadow-black rounded-2 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center lg:h-full lg:w-full h-44 w-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Card;
