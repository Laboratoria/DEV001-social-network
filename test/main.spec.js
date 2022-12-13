import { components, routes, onNavigate } from '../src/main.js';

// TEST onNavigate
describe('onNavigate', () => {
  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});

// TEST components ?
describe('components', () => {
  it('debería ser una función', () => {
    expect(typeof components).toBe('function');
  });
});

// TEST routes ?
describe('routes', () => {
  it('debería ser una función', () => {
    expect(typeof routes).toBe('function');
  });
});
