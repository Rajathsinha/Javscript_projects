const apiKey = "c9920352ee44e518436381f8e34ca608";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(City) {
    const response = await fetch(apiUrl + City + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
