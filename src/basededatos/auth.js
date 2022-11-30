import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const register = (email, password) => {
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Registro exitoso")// ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });