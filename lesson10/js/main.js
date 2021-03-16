document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

var d = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("now").innerHTML = days[d.getDay()]+ ", "+ months[d.getMonth()]+" "+ d.getDate()+", " + d.getFullYear();
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}


    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5) {
        document.getElementById("Saturday").style.display = "block";
    }

// const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         const towns = jsonObject['towns'];
//         const prestons = document.querySelector('.prestons');
//       const prestonfilter = towns.filter(x => x.name == "Preston");
//       prestonfilter.forEach(prestontown => {
//              let preston = document.createElement('section');
//              let h2 = document.createElement('h2');
//            let p1 = document.createElement('p');
//         let p2 = document.createElement('p');
//         let p3 = document.createElement('p');
// let p4 = document.createElement('p');
          
//            h2.innerHTML = `${prestontown.name}`;
//         p1.innerHTML = `<span style="font-weight:900">Motto:${prestontown.motto}</span> `;
//         p2.innerHTML = `<span style="font-weight:900">Year Founded:</span> ${prestontown.yearFounded}`;
//         p3.innerHTML = `<span style="font-weight:900">Population:</span> ${prestontown.currentPopulation}`;
//         p4.innerHTML = `<span style="font-weight:900">Average Rainfall:</span> ${prestontown.averageRainfall}`;
        
//               prestons.append(preston);
//         preston.append(h2);
//            preston.append(p1);
//               preston.append(p2);
//         preston.append(p3);
//         preston.append(p4);
       
//       });
      
      // const fishHs = document.querySelector('.fishHs');
      // const fishHfilter = towns.filter(x => x.name == "Fish Haven");
      // fishHfilter.forEach(fishHtown => {
      //        let fishH = document.createElement('section');
      //        let h2 = document.createElement('h2');
      //      let p1 = document.createElement('p');
      //   let p2 = document.createElement('p');
      //    let p3 = document.createElement('p');
      //      let p4 = document.createElement('p');
          
      //    let image = document.createElement('img');
         
      //      h2.innerHTML = `${fishHtown.name}`;
      //      p1.innerHTML = `<span style="font-weight:900">Motto:${fishHtown.motto}</span> `;
      //   p2.innerHTML = `<span style="font-weight:900">Year Founded:</span> ${fishHtown.yearFounded}`;
      //    p3.innerHTML = `<span style="font-weight:900">Population:</span> ${fishHtown.currentPopulation}`;
      //    p4.innerHTML = `<span style="font-weight:900">Average Rainfall:</span> ${fishHtown.averageRainfall}`;
         
      //     image.setAttribute('src', fishHtown.photo);
      //       image.setAttribute('alt', `${fishHtown.name}`);
        
      //        fishH.append(h2);
      //      fishH.append(p1);
      //         fishH.append(p2);
      //   fishHs.append(fishH);
      //   fishH.append(p3);
      //    fishH.append(p4);
      //    fishH.append(image);
      // });
      //  const sodas = document.querySelector('.sodas');
      // const sodafilter = towns.filter(x => x.name == "Soda Springs");
      // sodafilter.forEach(sodatown => {
      //        let soda = document.createElement('section');
      //        let h2 = document.createElement('h2');
      //      let p1 = document.createElement('p');
      //   let p2 = document.createElement('p');
      //   let p3 = document.createElement('p');
      //      let p4 = document.createElement('p');
          
      //      h2.innerHTML = `${sodatown.name}`;
      //      p1.innerHTML = `<span style="font-weight:900">Motto:${sodatown.motto}</span> `;
      //   p2.innerHTML = `<span style="font-weight:900">Year Founded:</span> ${sodatown.yearFounded}`;
      //    p3.innerHTML = `<span style="font-weight:900">Population:</span>${sodatown.currentPopulation}`;
      //   p4.innerHTML = `<span style="font-weight:900">Average Rainfall:</span> ${sodatown.averageRainfall}`;
        
      //        soda.append(h2);
      //      soda.append(p1);
      //         soda.append(p2);
      //   sodas.append(soda);
      //   soda.append(p3);
      //         soda.append(p4);
      //      });
      //  });