  const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=49.8094&lon=30.1121&exclude=hourly,minutely,current&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=metric";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject.daily);
        const array = jsObject.daily;
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
            array.forEach(element => {
                let d = new Date(element);
           
        const imagesrc = `https://openweathermap.org/img/w/${element.daily[0].weather[0].icon}.png`;
            
            const desc = element.daily[0].weather[0].description;
            document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day + 1}`).textContent = Math.round(element.daily[0].temp.day);
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
       document.getElementById(`event1`).textContent = jsonObject[0].event;
       document.getElementById(`event2`).textContent = jsonObject[1].event;
        document.getElementById(`event3`).textContent = jsonObject[2].event;
         document.getElementById(`event4`).textContent = jsonObject[3].event;

   });
  

