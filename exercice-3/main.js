(function main() {
	let lancementOk = false;
	let statutEquipage  = true;
	let StatutOrdinateur = 'vert';

	if (statutEquipage  && StatutOrdinateur === 'vert') {
		console.log('Equipage et ordinateur approuvés.');
		lancementOk = true;
	} else {
		console.log('AVERTISSEMENT : L\'équipage ou l\'ordinateur n\'est pas prêt !');
		lancementOk = false;
	}

	if (lancementOk) {
		console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
		console.log("Allumage...");
		console.log("Décollage!");
	} else {
		console.log("Lancement annulé.");
	}
}()); // Main IIFE
