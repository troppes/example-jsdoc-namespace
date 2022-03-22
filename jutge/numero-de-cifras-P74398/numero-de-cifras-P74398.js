/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Numeros de cifras
 * @see {@link https://jutge.org/problems/P74398}
 * @namespace numero-de-cifras
 *
 */

'use strict';

/**
* Function that prints the lengths of all bases out.
* @memberof numero-de-cifras
* @param {number} inputNumber number to check in different bases.
* @param {number} baseLimit upper limit of bases to check
* @throws {RangeError} thrown if the baseLimit is higher than 36
*/
const countLengthInDifferentBases = (inputNumber, baseLimit) => {
  if (baseLimit > 36) {
    throw new RangeError('The limit for the bases can be 36 at maximum.');
  }

  for (let base = 2; base <= baseLimit; base++) {
    const numberCount = convertToBase(inputNumber, base).toString().length;
    console.log(`Base ${base} : ${numberCount} cifras.`);
  }
};

/**
* Functions that return the number as string in different bases.
* @memberof numero-de-cifras
* @param {number} number number to convert
* @param {number} base the wanted base
* @return {string} the number in the wanted base as string
*/
const convertToBase = (number, base) => {
  return number.toString(base);
};

/**
  * @desc Converts given input to number
  * @memberof numero-de-cifras
  * @param {number} message String to convert to number
  * @throws {RangeError} if number cant be converted
  * @return {number} Converted number
  */
const convertToNumber = function(message) {
  if (message == null || message === '') throw new RangeError('Null deteced');

  const theNumber = Number(message);

  if (!Number.isNaN(theNumber)) {// It is a number
    return theNumber;
  }
  throw new RangeError('The input entered was not a number!');
};


/**
* Checks if the correct number of command line arguments is given
*  and returns the chose one
* @memberof numero-de-cifras
* @param {number} expectedInputs - expected number of argument
* @param {number} argumentIndex - the wanted argument, starting with 0
* @return {string} returns the wanted argument
*/
const readInputs = function(expectedInputs, argumentIndex) {
  if (process.argv.length !== expectedInputs + 2) {
    console.log('Wrong number of arguments');
    process.exit(-1);
  }
  return process.argv[argumentIndex + 2];
};

/**
 * main function to create a starting point
 */
function main() {
  const numberToCheck = convertToNumber(readInputs(2, 0));
  const baseLimit = convertToNumber(readInputs(2, 1));

  countLengthInDifferentBases(numberToCheck, baseLimit);
}

if (require.main === module) {
  main();
}

module.exports = {convertToBase};
