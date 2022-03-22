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
 *
 */

const numeroDeCifras =
  require('../numero-de-cifras-P74398/numero-de-cifras-P74398.js');

describe('test base encoding', () => {
  test('test with base 16', () => {
    expect(numeroDeCifras.convertToBase(100, 16)).toBe('64');
  });
  test('test with base 10', () => {
    expect(numeroDeCifras.convertToBase(100, 10)).toBe('100');
  });
  test('test with base 5', () => {
    expect(numeroDeCifras.convertToBase(100, 5)).toBe('400');
  });
  test('test with base 3', () => {
    expect(numeroDeCifras.convertToBase(100, 3)).toBe('10201');
  });
  test('test with base 2', () => {
    expect(numeroDeCifras.convertToBase(100, 2)).toBe('1100100');
  });
});
