import day from "../../assets/images/day.png";
import night from "../../assets/images/night.png";
import fewCloudsDay from "../../assets/images/fewCloudsDay.png";
import fewCloudsNight from "../../assets/images/fewCloudsNight.png";
import scatteredCloud from "../../assets/images/scatteredCloud.png";
import brokenClouds from "../../assets/images/brokenClouds.png";
import showerRain from "../../assets/images/showerRain.png";
import rainDay from "../../assets/images/rainDay.png";
import rainNight from "../../assets/images/rainNight.png";
import thunderstorm from "../../assets/images/thunderstorm.png";
import snow from "../../assets/images/snow.png";
import mist from "../../assets/images/mist.png";

export const getWeatherIcon = (weatherCode) => {
  let icon;
  console.log("weatherCode", weatherCode);
  if (weatherCode === "01d") {
    icon = day;
  } else if (weatherCode === "01n") {
    icon = night;
  } else if (weatherCode === "02d") {
    icon = fewCloudsDay;
  } else if (weatherCode === "02n") {
    icon = fewCloudsNight;
  } else if (weatherCode === "03d" || weatherCode === "03n") {
    icon = scatteredCloud;
  } else if (weatherCode === "04n" || weatherCode === "04d") {
    icon = brokenClouds;
  } else if (weatherCode === "09d" || weatherCode === "09n") {
    icon = showerRain;
  } else if (weatherCode === "10d") {
    icon = rainDay;
  } else if (weatherCode === "10n") {
    icon = rainNight;
  } else if (weatherCode === "11d" || weatherCode === "11n") {
    icon = thunderstorm;
  } else if (weatherCode === "13d" || weatherCode === "13n") {
    icon = snow;
  } else if (weatherCode === "50d" || weatherCode === "50n") {
    icon = mist;
  }
  return icon;
};
