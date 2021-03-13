const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      let day = 0;
      const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayofweek = document.querySelector("dayofweek[]");
      temperature.textContent = jsObject.main.temp;

      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);  
  });