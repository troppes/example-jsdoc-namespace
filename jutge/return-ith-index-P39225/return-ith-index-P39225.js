/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Program that, given an integer number i
 *  and a sequence of natural numbers x1, …, xn, prints xi.
 * @see {@link https://jutge.org/problems/P39225}
 * @namespace return-ith-index
 *
 */

'use strict';

/**
* Function that prints the lengths of all bases out.
* @memberof return-ith-index
* @param {number} indexToGet index in the array starting with 1
* @param {number} arrayToSearch array to search through
* @throws {RangeError} thrown if the baseLimit is higher than 36
* @return {number} the number for the given index
*/
const getValueOfArray = (indexToGet, arrayToSearch) => {
  if (indexToGet > arrayToSearch.length || indexToGet < 0) {
    throw new RangeError('This index is invalid.');
  }

  return arrayToSearch[indexToGet - 1];
};


/**
  * @desc Converts given input to number
  * @memberof return-ith-index
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
 * main function to create a starting point
 */
function main() {
  const indexToGet = convertToNumber(process.argv[2]);
  let arrayValues = process.argv.slice(3);
  arrayValues = arrayValues.map((number) => convertToNumber(number));

  console.log(`At the position ${indexToGet}` +
   ` there is a(n) ${getValueOfArray(indexToGet, arrayValues)}.`);
}

if (require.main === module) {
  main();
}

module.exports = {getValueOfArray};
