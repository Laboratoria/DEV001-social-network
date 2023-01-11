export const signInWithEmailAndPassword = jest.fn(
  () => Promise.resolve({ user: 'abc' }),
);
export const getAuth = jest.fn();
export const signOut = jest.fn();
export const GoogleAuthProvider = class {};
export const signInWithPopup = () => Promise.resolve(console.log('hola!'));
