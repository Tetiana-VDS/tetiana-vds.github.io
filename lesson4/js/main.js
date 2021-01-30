document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("now").innerHTML = months[d.getMonth()]+" "+ d.getDate()+", " + d.getFullYear();
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}
