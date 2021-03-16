const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
   
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        const thefive = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        console.log(thefive);
        
        thefive.forEach(x => {
            let d = new Date(x.dt_txt);
            document.getElementById(`dayofWeek${x + 1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${x + 1}`).textContent = x.main.temp;
            day++

     });
  });

 
        //       const current = document.querySelector('#current');
        //       current.textContent = jsObject.main;
          

        //   const temperature = document.querySelector(#temp)
        //   const windchill = document.querySelector(#windchill)
        //   const dayofweek = document.querySelector(#humid)
        // humidity.textContent = jsObject.list.main.humidity;
        //   const dayofweek = document.querySelector(#speed)
    

//       const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);  