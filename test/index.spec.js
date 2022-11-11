// importamos la funcion que vamos a testear
import { Register } from '../src/component/Register.js';

describe('registro', () => {
  it('debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
});
