import { crearUSyPass } from '../src/components/Register.js';

describe('crearUSyPass', () => {
  it('debería ser una función', () => {
    expect(typeof crearUSyPass).toBe('function');
  });
});
