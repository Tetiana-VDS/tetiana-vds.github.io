  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=49.8094&lon=30.1121&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const thefive = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        console.log(thefive);
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        thefive.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
             const imagesrc =`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day + 1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`date${day + 1}`).textContent = months[d.getMonth()] +","+ d.getDate();
            document.getElementById(`wicon${day + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`wicon${day + 1}`).setAttribute('alt', desc);
            
            day++
        });
       
    });

const requestURL = "js/events.json";
fetch(requestURL)
    .then(function (response) {
       return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
       const mainevents = jsonObject[0].events; 
       document.getElementById(`event1`).textContent = jsonObject[0].event[0];
       document.getElementById(`event2`).textContent = jsonObject.events[1];
        document.getElementById(`event3`).textContent = jsonObject.events[2];
         document.getElementById(`event4`).textContent = jsonObject.events[3];

   });
  

