const DIVIDENDE = 18;
const nombres = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nombres.length; i++) {
	let estUnfacteur = false;
	let diviseur = nombres[i];

	if (DIVIDENDE % diviseur === 0) {
		estUnfacteur = true;
	}

	if (estUnfacteur) {
		console.log(`${diviseur} est un facteur de ${DIVIDENDE} !`);
	}
}

