// const weatherForm = document.querySelector(".search-city__form");
// const weatherInput = document.querySelector(".search-city__input");
//
// const resultBlock = document.querySelector(".result__block");
//
//
// const apiKeys = "a6c382ccdcbfb4eed446dc20586a39f9";
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