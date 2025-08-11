import {transtionsWeathers} from "./transtionsWeathers.js";

export { transtionsWeathers } from "./transtionsWeathers.js"

const weatherForm = document.querySelector(".search-city__form");
const weatherInput = document.querySelector(".search-city__input");

const resultBlock = document.querySelector(".result__block");



const apiKeys = "a6c382ccdcbfb4eed446dc20586a39f9";
//
//
//
// const getWeather = () => {
//
//   weatherForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//
//     resultBlock.innerHTML = "";
//
//     const cityName = weatherInput.value;
//     if (cityName === "") {
//       resultBlock.innerHTML = "Заполните полю";
//       return;
//     }
//
//     const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKeys}`;
//
//     fetch(API)
//       .then(response => response.json())
//       .then(json => {
//         console.log('Ответ от сервера:', json)
//         document.body.insertAdjacentHTML(
//           'beforeend',
//           `<pre>${JSON.stringify(json, null, 2)}</pre>`
//         );
//
//         const imgIcons = json.weather[0].icon;
//         const imgUrl = `https://openweathermap.org/img/wn/${imgIcons}@2x.png`
//
//         resultBlock.innerHTML = `
//         <h2>${json.name}</h2>
//         <img src="${imgUrl}" />
//         `
//       })
//       .catch(error => {
//         console.error('Ошибка запроса:', error)
//       })
//
//     weatherInput.value = "";
//   })
//
// }
//
//
//
// // getWeather();

resultBlock.innerHTML = "";

resultBlock.style.display = "none"


const getWeatherSearch = () => {
  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      resultBlock.innerHTML = "";

      const weatherSearchCityValue = weatherInput.value;
      if (weatherSearchCityValue === "") {
        throw new Error("Заполните поля поиска города")
      }

      const API = `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearchCityValue}&appid=${apiKeys}&lang=ru`


      resultBlock.style.display = "block";

      fetch(API)
        .then(responce => responce.json())
        .then(res => {

          const imgUrl =  `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`

          const weatherDescriptions = res.weather[0].description;
          const transletDescriptions = transtionsWeathers[weatherDescriptions] || weatherDescriptions;


          const localTimes = ts => new Date(ts * 1000 ).toLocaleTimeString("ru-RU", {hour: "2-digit", minute: "2-digit"})




          resultBlock.innerHTML = `
             <img src="${imgUrl}" class="result__images" />
             <h2 class="result__city-name">${res.name} ${res.sys.country}</h2>
             <h3 class="result__descriptions">${transletDescriptions}</h3>
             <h3 class="result__degree">${Math.round(res.main.temp - 273,15)}°С</h3>
             <div class="result__times">
                <h4>Восход солнце: ${localTimes(res.sys.sunrise)}</h4>  
                <h4>Закат солнце: ${localTimes(res.sys.sunset)}</h4>  
             </div>
             
          `
        })

      weatherInput.value = "";
    } catch (err) {
      resultBlock.style.display = "block";
      resultBlock.innerHTML = `
          <h1 class="errors">
            Ошибка при поиске: ${err.message}
          </h1>
      `
    }
  })
}



getWeatherSearch();