export const getAuth = jest.fn(() => ({ currentUser: { photoURL: '', displayName: '' } }));
// eslint-disable-next-line max-len
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));
export const updateProfile = jest.fn(() => Promise.resolve());
// eslint-disable-next-line max-len
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));

export const GoogleAuthProvider = jest.fn(() => Promise.resolve());

// eslint-disable-next-line max-len
// export const signInWithPopup = jest.fn((auth, GoogleAuthProvider) => Promise.resolve({ user: { } }));
