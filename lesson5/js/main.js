document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

var d = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("now").innerHTML = days[d.getDay()]+ ", "+ months[d.getMonth()]+" "+ d.getDate()+", " + d.getFullYear();
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}
var now = new Date();
var dayOfWeek = new Date().getDay();
if (dayOfWeek == 4) {
    document.getElementById("Saturday").innerHTML
}
