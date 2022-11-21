export const getAuth = jest.fn();
// eslint-disable-next-line max-len
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email } }));
export const updateProfile = jest.fn(() => Promise.resolve());

// eslint-disable-next-line max-len
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email } }));

export const GoogleAuthProvider = jest.fn(() => Promise.resolve());
// eslint-disable-next-line max-len
// export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({ user: { emailVerified } }));
