/**
 * @jest-environment jsdom
 */
import { registrarUsuario, createUserWithEmailAndPassword } from "../src/Firebase";
import { Register } from "../src/lib/Register";

jest.mock('../src/main.js');

describe('Los test del Registro', () => {
    test('Comprobar que exista un boton para registrarse', () => {
        const register = Register()
        const boton = register.querySelector('.botonregistro');
        expect(boton).not.toBeNull();


        // boton.click()
        // const error = register.querySelector('.error');
        // expect(error.textContent).toEqual('Algo ha salido mal, inténtelo de nuevo');

    })
    test('Comprobar que exista un input para el email', () => {
        const register = Register()
        const input = register.querySelector('.correo');
        expect(input).not.toBeNull();


    });

    it('Ejecuta registrarUsuario()', () => {
        let email = 'persona@gmail.com';
        let contraseña = 'persona123';
        registrarUsuario(email, contraseña);
        expect(registrarUsuario).toHaveBeenCalled();
    });



})




// segundoTest('El usuario al hacer click en el botón de registro sin llenar correo o contraseña aparece un error', () => {
//     const register = Register()
//     const error = register.querySelector('.error');
//     const boton = register.querySelector('.botonregistro');
//     boton.click()
//     const correo = register.querySelector('.correo');
//     const contraseña = register.querySelector('.password');

// document.body.innerHTML = '<input class="correo"></input> <input class="password"></input>';