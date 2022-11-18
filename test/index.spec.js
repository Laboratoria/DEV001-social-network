// importamos la funcion que vamos a testear
//import { auth } from '../src/lib/Archivos JS/firebase.js';//
//import { async } from "regenerator-runtime";
import { functionRegister,
  functionLogin } from "../src/lib/Archivos JS/index.js";

describe("myFunctionRegister", () => {
  it("debería ser una función", () => {
    expect(typeof functionRegister).toBe("function");
  });
  it("debería retornar un objeto con la propiedad email", async() => {
    return await functionRegister("ruth.pz@gmail.com", "1234ruth", "Gaby").then(
      (user) => {
        expect(user.email).toBe("ruth.pz@gmail.com");
      }
    );
  });
  it("debería retornar un objeto con la propiedad password", async() => {
    return await functionRegister("ruth.pz@gmail.com", "1234ruth", "Gaby").then(
      (user) => {
        expect(user.password).toBe("1234ruth");
      }
    );
  });
  it("debería retornar un error", async() => {
    return await functionRegister("ruth.pz@gmail", "1234ruth", "Gaby").then(
      () => {
        expect("error").toBe("error");
      }
    );
  });
});


describe("myFunctionLogin", () => {
  it("debería ser una función", () => {
    expect(typeof functionLogin).toBe("function");
  });
  /*it("debería retornar un objeto con la propiedad email", async() => {
    return await functionLogin("petito@gmail.com", "123456").then(
      (user) => {
        expect(user.email).toBe("petito@gmail.com");
      }
    );
  });

  it("debería retornar un error", async() => {
    return await functionRegister("ruth.pz@gmail", "1234ruth", "Gaby").then(
      () => {
        expect("error").toBe("error");
      }
    );
  });*/
});
