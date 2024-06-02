const API_KEY = "0e69013c8245770af56b26270c748d80";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const weatherText = data.weather[0].main;
      let weatherIcon;
      if (weatherText === "Clear") weatherIcon = "☀️ 맑음";
      else if (weatherText === "Clouds") weatherIcon = "☁️ 흐림";
      else if (weatherText === "Rain") weatherIcon = "🌧️ 비";
      else if (weatherText === "Snow") weatherIcon = "🌨️ 눈";

      weather.innerText = `${weatherIcon} / ${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Can't find you.");
}
function updateWeather() {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

updateWeather();

// setInterval(updateWeather, 1000);
