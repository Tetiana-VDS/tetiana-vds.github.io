const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        
        const current = document.querySelector('#current');
        current.innerHTML = jsObject.list[0].weather[0].main;
        const temperature = document.querySelector('#temp');
        temperature.innerHTML = Math.round(jsObject.list[0].main.temp);
        const humidity = document.querySelector('#humid');
        humidity.innerHTML = jsObject.list[0].main.humidity;
        const windspeed = document.querySelector('#speed')
        windspeed.innerHTML = jsObject.list[0].wind.speed;

         function windchill() {
var temperature = parseFloat(document.querySelector('#temp').innerHTML);
    var windSpeed = parseFloat(document.querySelector('#speed').innerHTML);
    var chill = Math.round(35.74 + 0.6215 * temperature - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));

             document.getElementById("windchill").innerHTML = chill;
         }
    });

        const apiURL32 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL32)
    .then((response) => response.json())
    .then((jsObject) => {
         console.log(jsObject);
        const thefive = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        console.log(thefive);
        
        thefive.forEach(x => {
            let day = 0;
            const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let d = new Date(theFive[day+1].dt_txt);
             const imagesrc = 'https://openweathermap.org/img/w/' + theFive[day].weather[0].icon + '.png';  // note the concatenation
            const desc = theFive[day+1].weather[0].description;
            document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day + 1}`).textContent = Math.round(forecast[day+1].main.temp);
            document.getElementById('imagesrc').textContent = imagesrc;
            document.getElementById(`wicon${day + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`wicon${day + 1}`).setAttribute('alt', desc);
            day++
        })
       
    });
  
