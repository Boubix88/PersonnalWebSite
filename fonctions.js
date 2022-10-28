
var navbar = document.getElementById("bandeau");
var menu = document.getElementById("navigation");
window.onscroll = function(){
    if (window.pageYOffset >= menu.offsetTop){
        console.log("Oui");
        navbar.classList.add("sticky");
    } else {
        console.log("Non");
        navbar.classList.remove("sticky");
    }
}