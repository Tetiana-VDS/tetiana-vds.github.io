document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

//var d = new Date();
//var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//document.getElementById("").innerHTML = months[d.getMonth()]+ today.getDate()+","+today.getFullYear();

var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth("long") + 1) + '-' + today.getDate();
document.getElementById("now").innerHTML = date;

function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}
