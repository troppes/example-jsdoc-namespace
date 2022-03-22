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
 *
 */

const returnIthIndex =
 require('../return-ith-index-P39225/return-ith-index-P39225.js');

describe('test correct index return', () => {
  test('test with one element', () => {
    expect(returnIthIndex.getValueOfArray(1, [1])).toBe(1);
  });
  test('test with two elements', () => {
    expect(returnIthIndex.getValueOfArray(2, [1, 2])).toBe(2);
  });
  test('test with three elements', () => {
    expect(returnIthIndex.getValueOfArray(2, [1, 2, 3])).toBe(2);
  });
  test('test out of bounds', () => {
    expect(() => returnIthIndex.getValueOfArray(3, [1, 2])).toThrow(RangeError);
  });
  test('test out of bounds negative', () => {
    expect(() => returnIthIndex.getValueOfArray(-1, [1, 2]))
        .toThrow(RangeError);
  });
  test('test with empty array', () => {
    expect(() => returnIthIndex.getValueOfArray(1, []))
        .toThrow(RangeError);
  });
});
