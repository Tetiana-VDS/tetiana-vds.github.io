document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

var d = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("now").innerHTML = days[d.getDay()]+ ", "+ months[d.getMonth()]+" "+ d.getDate()+", " + d.getFullYear();
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}


    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6) {
        document.getElementById("Saturday").style.display = "block";
    }

 