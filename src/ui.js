class UI {
  constructor() {
    this.weatherDescriptionHeader = document.getElementById(
      "weatherDescriptionHeader"
    );
    this.temperatureElement = document.getElementById("temperature");
    this.humidityElement = document.getElementById("humidity");
    this.windSpeedElement = document.getElementById("windSpeed");
    this.cityHeader = document.getElementById("cityHeader");
    this.weatherIcon = document.getElementById("documentIconImg");
    this.weatherContainer = document.getElementById("weatherContainer");
  }

  init(resultFromServer) {
    console.log(resultFromServer);
    switch (resultFromServer.weather[0].main) {
      case "Clear":
        document.body.style.backgroundImage = "url('clear.jpeg')";
        break;
      case "Clouds":
        document.body.style.backgroundImage = "url('cloudy.jpeg')";
        break;
      case "Rain":
        document.body.style.backgroundImage = "url('rain.jpeg')";
        break;
      case "Drizzle":
        document.body.style.backgroundImage = "url('drizzle.jpeg')";
        break;
      case "Mist":
        document.body.style.backgroundImage = "url('mist.jpeg')";
        break;
      case "Thunderstorm":
        document.body.style.backgroundImage = "url('storm.jpeg')";
        break;
      case "Snow":
        document.body.style.backgroundImage = "url('snow.jpeg')";
        break;
      default:
        document.body.style.backgroundImage = "url('default.jpeg')";
        break;
    }

    this.weatherIcon.src =
      "http://openweathermap.org/img/w/" +
      resultFromServer.weather[0].icon +
      ".png";

    let resultDescription = resultFromServer.weather[0].description;
    this.weatherDescriptionHeader.innerText =
      resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    this.temperatureElement.innerHTML =
      Math.floor(resultFromServer.main.temp) + "&#176";
    this.windSpeedElement.innerHTML =
      "Winds at " + Math.floor(resultFromServer.wind.speed) + "m/s";
    this.cityHeader.innerHTML = resultFromServer.name;
    this.humidityElement.innerHTML =
      "Humidity levels at " + resultFromServer.main.humidity + "%";
  }

  showWeatherContainer() {
    this.weatherContainer.style.visibility = "visible";
  }
}

export const ui = new UI();
