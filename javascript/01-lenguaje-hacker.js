/*
  Reto #1: EL "LENGUAJE HACKER"

  * Escribe un programa que reciba un texto y transforme lenguaje natural a
  * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
  *  se caracteriza por sustituir caracteres alfanuméricos.
  * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
  *   con el alfabeto y los números en "leet".
  *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
*/

const LEETS = {
	A: 4,
	B: "I3",
	C: "[",
	D: ")",
	E: 3,
	F: "|=",
	G: "&",
	H: "#",
	I: 1,
	J: ",_|",
	K: ">|",
	L: 1,
	M: "JVI",
	N: "^/",
	O: "0",
	P: "|*",
	Q: "(_,)",
	R: "I2",
	S: 5,
	T: 7,
	U: "(_)",
	V: "/",
	W: "VV",
	X: "><",
	Y: "j",
	Z: 2,
	0: "o",
	1: "L",
	2: "R",
	3: "E",
	4: "A",
	5: "S",
	6: "b",
	7: "T",
	8: "B",
	9: "g",
};

function transformText(text) {
	let letText = "";

	for (const value of text) {
		if (Object.hasOwn(LEETS, value.toUpperCase())) {
			letText += LEETS[value.toUpperCase()];
		} else {
			letText += value.toUpperCase();
		}
	}

	return letText;
}

console.log(transformText("Hola mundo"));
console.log(transformText("Python"));
console.log(transformText("JavaScript y Python"));
