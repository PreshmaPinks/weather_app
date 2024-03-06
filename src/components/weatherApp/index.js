import React, { useState } from "react";
import { APIKey } from "../../services/services";
import "./index.css";
import { getWeatherIcon } from "./iconLogic";

function WeatherAppMain() {
  const [inputData, setInputdata] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [Error, setError] = useState("");
  //   console.log("im", inputData);

  const ShowWeather = () => {
    console.log("jj", inputData);
    const apiData = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${inputData}&units=Metric&appid=${APIKey}`
    );
    apiData
      .then((res) => {
        console.log(res, "ok");
        if (res.ok) {
          return res.json();
        } else {
          throw res.statusText;
          // console.log("err", res);
        }
      })
      .then((result) => {
        // console.log(result, "okh");
        setWeatherData(result);
        // console.log("result", result?.list?.[0]?.weather?.[0]?.icon);
        const icon = getWeatherIcon(result?.list?.[0]?.weather?.[0]?.icon);
        setWeatherIcon(icon);
      })
      .catch((err) => {
        setError(err);
      });

    setInputdata("");
  };

  console.log("im", weatherData);

  return (
    <div className="weather-app-container">
      <div className="weather-app-header">
        <span className="weather-text">Weather</span>
        <span className="app-text"> App</span>
      </div>

      <div className="weather-app-container-content">
        <div className="weather-app-container-location">
          <input
            className="location-search-input-box"
            placeholder="search location"
            value={inputData}
            onChange={(e) => setInputdata(e.target.value)}
          ></input>
          <button className="search-button" onClick={ShowWeather}>
            Search
          </button>
        </div>

        {weatherData && (
          <div className="weather-app-container-info">
            {Error && <p> {Error}</p>}

            <div className="display-weather-info">
              <p className="weather-data cityname">
                {weatherData?.city?.name.toUpperCase()}
              </p>

              <div className="display-temp-info">
                <div className="temp-left-container">
                  <p className="weather-data weather-temp">
                    {weatherData?.list?.[0]?.main?.temp}&deg;C
                  </p>

                  <div className="icon-description">
                    <img
                      className="weather-icon"
                      alt="Weather-icon"
                      src={weatherIcon}
                    ></img>
                    <p className="weather-data weather-description">
                      {weatherData?.list?.[0]?.weather?.[0]?.description}
                    </p>
                  </div>
                </div>

                <div className="temp-right-container">
                  <p className="weather-data humidity-info">
                    humidity {weatherData?.list?.[0]?.main?.humidity}
                  </p>
                  <p className="weather-data wind-info">
                    wind &nbsp; &nbsp;{weatherData?.list?.[0]?.wind?.speed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherAppMain;
