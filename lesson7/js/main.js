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

    const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
 