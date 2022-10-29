var navbar = document.getElementById("bandeau");
var menu = document.getElementById("navigation");
const btnTop = document.getElementById("fleche_haut");
const btnBottom = document.getElementById("fleche_bas");
const btnAccueil = document.getElementById("boutonAccueil");
const btnProjets = document.getElementById("boutonProjet");
const btnAPropos = document.getElementById("boutonAPropos");
const btnContacts = document.getElementById("boutonContacts");
const accueil = document.getElementById("accueil");
const projets = document.getElementById("projets");
const jeu = document.getElementById("jeu");
const arduino = document.getElementById("arduino");
const jeuAndroid = document.getElementById("jeuAndroid");
const aPropos = document.getElementById("aPropos");
const contacts = document.getElementById("contacts");
var position = "Accueil";
window.onscroll = function(){
    if (window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

	setBtnStyle(window, accueil, btnAccueil);
	setBtnStyle(window, projets, btnProjets);
	setBtnStyle(window, aPropos, btnAPropos);
	setBtnStyle(window, contacts, btnContacts);

    if (window.pageYOffset >= accueil.offsetTop && window.pageYOffset < (accueil.offsetTop + accueil.offsetHeight)){
        position = "Accueil";
    } else if (window.pageYOffset >= jeu.offsetTop && window.pageYOffset < (jeu.offsetTop + jeu.offsetHeight)){
        position = "Jeu";
    } else if (window.pageYOffset >= arduino.offsetTop && window.pageYOffset < (arduino.offsetTop + arduino.offsetHeight)){
        position = "Arduino"; 
    } else if (window.pageYOffset >= jeuAndroid.offsetTop && window.pageYOffset < (jeuAndroid.offsetTop + jeuAndroid.offsetHeight)){
        position = "JeuAndroid";
    } else if (window.pageYOffset >= aPropos.offsetTop && window.pageYOffset < (aPropos.offsetTop + aPropos.offsetHeight)){
        position = "APropos";
    } else if (window.pageYOffset >= contacts.offsetTop && window.pageYOffset < (contacts.offsetTop + contacts.offsetHeight)){
        position = "Contacts";
    }            
    console.log("Position : ", position);
}

function applyButtonArrowBottom(){
    switch (position){
        case "Accueil":
            window.location.href="#jeu";
            position = "Jeu";
        break;
        
        case "Jeu":
            window.location.href="#arduino";
            position = "Arduino";
        break;
        
        case "Arduino":
            window.location.href="#jeuAndroid";
            position = "JeuAndroid";
        break;
        
        case "JeuAndroid":
            window.location.href="#aPropos";
            position = "APropos";
        break;
        
        case "APropos":
            window.location.href="#contacts";
            position = "Contacts";
        break;
        
        case "Contacts":
        break;    
    }
}

function applyButtonArrowTop(){
    switch (position){
        case "Accueil":
        break;
        
        case "Jeu":
            window.location.href="#accueil";
            position = "Accueil";
        break;
        
        case "Arduino":
            window.location.href="#jeu";
            position = "Jeu";
        break;
        
        case "JeuAndroid":
            window.location.href="#arduino";
            position = "Arduino";
        break;
        
        case "APropos":
            window.location.href="#jeuAndroid";
            position = "JeuAndroid";
        break;
        
        case "Contacts":
            window.location.href="#aPropos";
            position = "APropos";
        break;    
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal);

function setBtnStyle(window, element, btn){
	if (window.pageYOffset >= element.offsetTop && window.pageYOffset < (element.offsetTop + element.offsetHeight)){
        btn.style.background = "blanchedalmond";
		btn.style.color = "black";
    } else {
        btn.style.background = "transparent";
		btn.style.color = "blanchedalmond";
    }
	return;
}