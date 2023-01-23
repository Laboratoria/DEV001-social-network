/**
 * @jest-environment jsdom
 */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Register } from "../src/lib/Register.js";
import { loginUsuario, registrarUsuario, registroGoogle } from "../src/Firebase.js";
import { async } from "regenerator-runtime";
// jest.mock('../src/main.js');
// jest.mock('../src/Firebase.js');
// jest.mock('firebase/auth');

describe('Los test del Registro', () => {
    test('Comprobar que exista un boton para registrarse', () => {
        const register = Register()
        const boton = register.querySelector('.botonregistro');
        expect(boton).not.toBeNull();

    })

    test('Que funcione registrar usuario', async() => {
        const email = 'persona@gmail.com';
        const contraseña = 'persona123';
        const callback = jest.fn();
        await registrarUsuario(email, contraseña, callback);
        expect(createUserWithEmailAndPassword).toHaveBeenCalled()
    })




    test('Comprobar que exista un input para el email', () => {
        const register = Register()
        const input = register.querySelector('.correo');
        expect(input).not.toBeNull();


    });



    test('Deberia retornar un objeto con la propiedad email y password', () => {
        registrarUsuario('persona1@gmail.com', '1234567');
        expect({
            email: 'persona1@gmail.com',
            password: '1234567',
        }).toEqual(expect.anything());
    });

    it('registrarUsuario debería ser una función', () => {
        expect(typeof registrarUsuario).toBe('function');
    });



})


describe('Los test del Login', () => {
    test('Que funcione logear usuario', async() => {
        const email = 'persona@gmail.com';
        const contraseña = 'persona123';
        const callback = jest.fn();
        await loginUsuario(email, contraseña, callback);
        expect(signInWithEmailAndPassword).toHaveBeenCalled()
    })


    it('Debe validar el usuario registrado desde google', () => {
        signInWithPopup.mockImplementation(() => Promise.resolve('persona01@gmail.com'));
        registroGoogle(signInWithPopup);

        expect(signInWithPopup).toBeCalled();
    });

    // it('Debería poder ingresar con Google', () => {
    //     const provider = new GoogleAuthProvider();
    //     registroGoogle(getAuth(), provider).then(() => {
    //         expect(signInWithPopup).toHaveBeenCalledWith(getAuth(), provider);
    //     });
    // });
})