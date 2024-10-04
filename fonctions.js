var navbar = document.getElementById("bandeau");
var menu = document.getElementById("navigation");

const btnTop = document.getElementById("fleche_haut");
const btnBottom = document.getElementById("fleche_bas");

const btnAccueil = document.getElementById("boutonAccueil");
const btnProjets = document.getElementById("boutonProjets");
const btncCmpetences = document.getElementById("boutonCompetences");
const btnAPropos = document.getElementById("boutonAPropos");
const btnContacts = document.getElementById("boutonContacts");

const accueil = document.getElementById("accueil");
const projetsEtu = document.getElementById("projetsEtu");
const projetsPerso = document.getElementById("projetsPerso");
const competences = document.getElementById("competences");
const arduino = document.getElementById("arduino");
const aPropos = document.getElementById("aPropos");
const contacts = document.getElementById("contacts");

var position = "Accueil";

// On met de base le bouton accueil en couleur
btnAccueil.style.color = "#3ca0e7";

window.onscroll = function(){
    /*if (window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }*/

	setBtnStyle(window, accueil, btnAccueil);
	setBtnStyle(window, projetsEtu, btnProjets);
    setBtnStyle(window, projetsPerso, btncCmpetences);
	setBtnStyle(window, aPropos, btnAPropos);
	setBtnStyle(window, contacts, btnContacts);

    if (window.pageYOffset >= accueil.offsetTop && window.pageYOffset < (accueil.offsetTop + accueil.offsetHeight)){
        position = "Accueil";
    } else if (window.pageYOffset >= projetsEtu.offsetTop && window.pageYOffset < (projetsEtu.offsetTop + projetsEtu.offsetHeight)){
        position = "ProjetsEtu"; 
    } else if (window.pageYOffset >= projetsPerso.offsetTop && window.pageYOffset < (projetsPerso.offsetTop + projetsPerso.offsetHeight)){
        position = "ProjetsPerso";
    } else if (window.pageYOffset >= competences.offsetTop && window.pageYOffset < (competences.offsetTop + competences.offsetHeight)){
        position = "Competences";
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
            window.location.href="#projetsEtu";
            position = "ProjetsEtu";
        break;
        
        case "ProjetsEtu":
            window.location.href="#projetsPerso";
            position = "ProjetsPerso";
        break;

        case "ProjetsPerso":
            window.location.href="#competences";
            position = "Competences";
        break;

        case "Competences":
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

        case "ProjetsEtu":
            window.location.href="#accueil";
            position = "Accueil";
        break;
        
        case "ProjetsPerso":
            window.location.href="#projetsEtu";
            position = "ProjetsEtu";
        break;

        case "Competences":
            window.location.href="#projetsPerso";
            position = "ProjetsPerso";
        break;
        
        case "APropos":
            window.location.href="#competences";
            position = "Competences";
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
        //btn.style.background = "blanchedalmond";
		btn.style.color = "#3ca0e7";
    } else {
        //btn.style.background = "transparent";
		btn.style.color = "blanchedalmond";
    }
	return;
}

function applyBtnStyleOver(id){
    document.getElementById(id).style = "background: blanchedalmond; color: black;";
}

function applyBtnStyleOut(id){
    document.getElementById(id).style = "background: transparent; color: blanchedalmond;";
}
/* Listener de boutons dans contacts */
document.querySelector('#linkedin-icon').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/sandy-gehin-2aa5b0257', '_blank');
});

document.querySelector('#github-icon').addEventListener('click', function() {
    window.open('https://github.com/Boubix88', '_blank');
});

document.querySelector('#gitlab-icon').addEventListener('click', function() {
    window.open('https://gitlab.univ-lorraine.fr/gehin94u', '_blank');
});


/* Listener de boutons dans projets */

function openMenu() {
    console.log("Menu ouvert");
    const navigation = document.getElementById('menu-list');
    //navigation.classList.toggle('open');
    navigation.style.right = "0";
}

function closeMenu() {
    console.log("Menu fermé");
    const navigation = document.getElementById('menu-list');
    //navigation.classList.remove('open');
    navigation.style.right = "-100%";
}

// On ferme le menu si on clique en dehors du menu
window.addEventListener('click', function(event) {
    console.log("Click", event.target.id);

    // Vérifier que l'élément cliqué n'est pas le menu ou le bouton du menu ou le bouton projets ou un de ses fils
    if (event.target.id !== "menu-list" && event.target.id !== 'menu-btn' && (event.target.id !== 'boutonProjets' && !btnProjets.contains(event.target))) {
        const navigation = document.getElementById('menu-list');
        navigation.style.right = "-100%";
    }
});