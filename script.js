const apiKey = "b25d1625e485ff04de88aa07a7a65b92"; // Replace this with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherBox = document.getElementById("weather");

  if (!city) {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      weatherBox.innerHTML = `<p>City not found!</p>`;
      return;
    }

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherBox.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.main.temp}°C</strong></p>
      <p>${data.weather[0].description}</p>
      <img src="${iconUrl}" alt="weather icon" />
    `;
  } catch (error) {
    weatherBox.innerHTML = `<p>Error fetching data</p>`;
  }
}
function toggleTheme() {
  document.body.classList.toggle("dark");
}
