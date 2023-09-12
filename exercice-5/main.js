let lancementOk = false;
let niveauDeCarburant = 27000;

if (niveauDeCarburant >= 20000) {
	console.log('Niveau de carburant vérifié.');
	lancementOk = true;
} else {
	console.log('AVERTISSEMENT : Carburant insuffisant !');
	lancementok = false;
}

if (lancementOk) {
	console.log("10, 9, 8...");
	console.log("Préchauffage ...");
	console.log("6, 5, 4...");
	console.log("Allumage...");
	console.log("3, 2, 1...");
	console.log("Décollage!");
} else {
	console.log("Lancement annulé.");
}