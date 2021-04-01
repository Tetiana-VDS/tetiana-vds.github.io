document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();
document.getElementById("modify").textContent = document.lastModified;


function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}


WebFont.load({google: {families: [ 'Lobster','Oswald', 'Montserrat', 'Merriweather'] }
});