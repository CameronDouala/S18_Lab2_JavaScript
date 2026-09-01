var tabSortes = ["coeur", "carreau", "pique", "trefle"];

//=================================================================
// Fournit un nombre aléatoire entier entre 0 et pMax - 1
function randNumber(pMax)
{
	return (Math.floor(pMax * Math.random()));
}

// Une fonction qui rend toutes les cartes blanches
function retirerLesClasses()
{
	let lesCartes = document.getElementsByTagName("li");

	for(let carte of lesCartes){
		carte.className = "";
	}
}

//=================================================================
function exemple1()
{
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	// Modifier le code pour appliquer le changement pour toutes les cartes
	// Il faut utiliser une boucle avec un index 
	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[0].className = "coeur13";
	}
}

//=================================================================
function exemple2()
{
	retirerLesClasses();
	
	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		
	}
}

//=================================================================
function exemple3()
{	
	retirerLesClasses();
}

//=================================================================
function exemple4()
{ 	
	retirerLesClasses();
}

//=================================================================
function exemple5()
{   
	retirerLesClasses();
}
//=================================================================
function exemple6()
{   
	retirerLesClasses();
}

//=================================================================
function exemple7()
{   
	retirerLesClasses();
}

//=================================================================
function exemple8()
{   
	retirerLesClasses();
}

//=================================================================
function exemple9()
{   
	retirerLesClasses();
}

//=================================================================
function exemple10()
{   
	retirerLesClasses();
}



//=================================================================
// Gestion des événements des boutons
// On obtient les boutons de la page
let liste = document.getElementsByTagName("button");

for(let button of liste){
	button.onclick = function() {
		// On utilise leur Id comme nom de fonction et on appel cette fonction!!
		// window permet d'appeler une fonction dont le nom est contenu dans une chaîne de caractères. 
		window[button.getAttribute("id")].call();
	};	
}
