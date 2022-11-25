export const getAuth = jest.fn();
// eslint-disable-next-line max-len
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));
export const updateProfile = jest.fn(() => Promise.resolve());
// eslint-disable-next-line max-len
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));

export const googleAuthProvider = jest.fn(() => Promise.resolve());
// eslint-disable-next-line max-len
export const signInWithPopup = jest.fn(() => Promise.resolve());
