import { http } from "./http";
import { ui } from "./ui";

document.getElementById("searchBtn").addEventListener("click", searchWeather);

function searchWeather() {
  let appId = "2c0247877b2db4fe0e20c0688a88db1c";
  let units = "metric";
  let searchMethod;

  let searchTerm = document.getElementById("searchInput").value;

  if (
    searchTerm.length === 5 &&
    Number.parseInt(searchTerm) + "" === searchTerm
  ) {
    searchMethod = "zip";
  } else {
    searchMethod = "q";
  }

  http
    .get(
      `http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`
    )
    .then(data => {
      ui.init(data);
      ui.showWeatherContainer();
    })
    .catch(err => console.log(err));
}
