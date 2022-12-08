// importamos la funcion que vamos a testear
import { app, auth, provider } from '../src/lib/index.js';

describe('app', () => {
  it('debería ser una función', () => {
    expect(typeof app).toBe('function');
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
