export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn((auth, email, password)=> Promise.resolve({user: {email: email, password: password}}));
export const updateProfile = jest.fn(()=>Promise.resolve());
export const signInWithEmailAndPassword = jest.fn((auth, email, password)=>Promise.resolve({user: {email: email, password: password}}));