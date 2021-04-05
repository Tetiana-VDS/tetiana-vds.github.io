  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=49.8094&lon=30.1121&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(apiURL);
    const thefive = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
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
  
// const requestURL7 = "https://byui-cit230.github.io/weather/data/towndata.json";
// fetch(requestURL7)
//     .then(function (response) {
//        return response.json();
//     })
//    .then(function (jsonObject) {
//       const towns = jsonObject['towns'];
//         const events = document.querySelector('.mainEvents');
//        const townfilter = towns.filter(i => i.name == "Preston");
       
//        const mainevents = townfilter[0].events; 
//        document.getElementById(`event1`).textContent = townfilter[0].events[0];
//        document.getElementById(`event2`).textContent = townfilter[0].events[1];
//             document.getElementById(`event3`).textContent = townfilter[0].events[2];

//    });
  

