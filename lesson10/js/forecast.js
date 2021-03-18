const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        const thefive = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        console.log(thefive);
        
        thefive.forEach(x => {
                    let day = 0;
//         const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//             let d = new Date(x.dt_txt);
//             document.getElementById(`dayofWeek${x + 1}`).textContent = dayofWeek[d.getDay()];
//                document.getElementById(`forecast${x + 1}`).textContent = x.main.temp;
//             const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[x].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description; 
// document.getElementById('imagesrc').textContent = imagesrc; 
// document.getElementById(`wicon${x + 1}`).setAttribute('src', imagesrc);  
// document.getElementById(`wicon${x + 1}`).setAttribute('alt', desc);  
//             document.getElementById(`forecast${x + 1}`).textContent = x.main.temp;

//             day++
       const current = document.querySelector('#current');
            current.innerHTML = x.weather[0].main;
            const temperature = document.querySelector('#temp');
            temperature.innerHTML = Math.round(x.main.temp);
            const humidity = document.querySelector('#humid');
            humidity.innerHTML = x.main.humidity;
             const windspeed = document.querySelector('#speed')
            windspeed.innerHTML = x.wind.speed;
     })
  });
