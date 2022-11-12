// aqui exportaras las funciones que necesites
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase.js";

export const functionRegister = async (email, password, name) => {
  console.log(email);
  console.log(password);
  console.log(name);

  try {
  
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    userCredentials.user.displayName = name;
    console.log(userCredentials.user);
    //console.log(userCredentials.user.displayName = name);
    return userCredentials.user;
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case "auth/email-already-in-use":
        alert("El correo ya está registrado");
        break;
      case "auth/invalid-email":
        alert("Debes ingresar un correo válido");
        break;
      case "auth/email-already-in-use":
        alert("La contraseña debe tener al menos 6 carácteres");
        break;
      default:
        alert("Algo está mal en tu registro");
    }
    /*
    if (error.code === "auth/email-already-in-use") {
      alert("El correo ya está registrado");
    } else if (error.code === "auth/invalid-email") {
      alert("Debes ingresar un correo válido");
    } else if (error.code === "auth/weak-password") {
      alert("La contraseña debe tener al menos 6 carácteres");
    } else if (error.code) {
      alert("Algo está mal en tu registro");
    }*/
  }
};

export const functionLogin = async (email, password) => {
  console.log(email);
  console.log(password);
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        alert("Contraseña incorrecta");
        break;
      case "auth/user-not-found":
        alert("Dirección Email no encontrada, por favor regístrese");
        break;
      default:
        alert("Error en inicio de sesión, intente nuevamente");
    }

    /*
    if (error.code === 'auth/wrong-password') {
      alert('Contraseña incorrecta');
    } else if (error.code === 'auth/user-not-found') {
      alert('Dirección Email no encontrada, por favor regístrese');
    } else if (error.code) {
      alert('Error en inicio de sesión, intente nuevamente');
    }
    */
  }
};


export const functionRegisterGoogle = async () =>{
  const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials.user);
      return credentials
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
};
