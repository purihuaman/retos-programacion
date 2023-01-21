/* TODO: FIZZ BUZZ
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const fizzbuzz = (numMin, numMax) => {
  for (let index = numMin; index <= numMax; index++) {
    if (index % 3 === 0 && index % 5 === 0) console.log("FIZZ BUZZ");
    else if (index % 3 === 0) console.log("FIZZ");
    else if (index % 5 === 0) console.log("BUZZ");
    else console.log(index);
  }
};

fizzbuzz(1, 100);
