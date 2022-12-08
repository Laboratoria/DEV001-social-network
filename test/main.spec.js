import { onNavigate } from '../src/main';

describe('onNavigate', () => {
  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
