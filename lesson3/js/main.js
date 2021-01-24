document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById("now").innerHTML = date;
