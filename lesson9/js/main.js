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

const townDataURL = "https://byui-cit230.github.io/weather/data/towndata.json"
const towns2get = [
    "Preston",
    "Fish Haven",
    "Soda Springs"
]
const city = document.querySelector('.city');
fetch(townDataURL)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
      const towns = jsonData["towns"].filter(item => towns2get.includes(item.name));

        towns.forEach(towns2get => {
        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let p3 = document.createElement('p3');
      let p4 = document.createElement('p4');
     
  
        h2.innerHTML = `${towns2get.name}`;
      p1.innerHTML = `Motto: ${towns2get.motto}`;
      p2.innerHTML = `Year Founded: ${towns2get.yearFounded}`;
        p3.innerHTML = `Population: ${towns2get.currentPopulation}`;
        p4.innerHTML = `Average Rainfall: ${towns2get.averageRainfall}`;
        
  
       city.append(town);
        city.append(h2);
        city.append(p1);
        city.append(p2);
       city.append(p3);
        city.append(p4);
  
      });
    })
