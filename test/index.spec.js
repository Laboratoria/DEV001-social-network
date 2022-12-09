// importamos la funcion que vamos a testear
import { crearUSyPass } from '../src/components/Register.js';

describe('crearUSyPass', () => {
  it('debería ser una función', () => {
    expect(typeof crearUSyPass).toBe('function');
  });
});
describe('auth', () => {
  it('debería ser una función', () => {
    expect(typeof auth).toBe('function');
  });
});
describe('provider', () => {
  it('debería ser una función', () => {
    expect(typeof provider).toBe('function');
  });
});
