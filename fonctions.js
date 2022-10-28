var navbar = document.getElementById("bandeau");
var menu = document.getElementById("navigation");
const btnAccueil = document.getElementById("boutonAccueil");
const btnProjets = document.getElementById("boutonProjet");
const btnAPropos = document.getElementById("boutonAPropos");
const btnContacts = document.getElementById("boutonContacts");
const accueil = document.getElementById("accueil");
const projets = document.getElementById("projets");
const aPropos = document.getElementById("aPropos");
const contacts = document.getElementById("contacts");
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
}

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