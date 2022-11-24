export const getAuth = jest.fn(() => ({ currentUser: { photoURL: '', displayName: '' } }));
// eslint-disable-next-line max-len
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));
export const updateProfile = jest.fn(() => Promise.resolve());
// eslint-disable-next-line max-len
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));

export const GoogleAuthProvider = jest.fn(() => Promise.resolve());

// eslint-disable-next-line max-len
// export const signInWithPopup = jest.fn((auth, GoogleAuthProvider) => Promise.resolve({ user: { } }));

// export const collection = jest.fn((db, 'task') => Promise.resolve());

// export const addDoc = jest.fn(() => Promise.resolve(collection));

export const getDocs = jest.fn(() => Promise.resolve());

export const onSnapshot = jest.fn((callback) => console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA') || callback([
  { id: 'aaa', data: () => ({}) },
]));

export const signOut = jest.fn((auth) => Promise.resolve(auth));

export const deleteDoc = jest.fn((id) => Promise.resolve(id));

export const getDoc = jest.fn((id) => Promise.resolve(id));

export const updateDoc = jest.fn((id, newTask) => Promise.resolve(id, newTask));
