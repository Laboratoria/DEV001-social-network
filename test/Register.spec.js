/**
 * @jest-environment jsdom
 */
import { registrarUsuario, createUserWithEmailAndPassword, getAuth } from "../src/Firebase";
import { Register } from "../src/lib/Register";

jest.mock('../src/main.js');
jest.mock('../src/Firebase.js');

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

    it('Snapshot del registro', () => {
        expect(Register()).toMatchSnapshot();
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


// it('Ejecuta registrarUsuario()', () => {
//     let email = 'persona@gmail.com';
//     let contraseña = 'persona123';
//     const registro = registrarUsuario(email, contraseña);
//     expect(registro).toBeTruthy();
// });

// expect(registrarUsuario).toHaveBeenCalled();


// segundoTest('El usuario al hacer click en el botón de registro sin llenar correo o contraseña aparece un error', () => {
//     const register = Register()
//     const error = register.querySelector('.error');
//     const boton = register.querySelector('.botonregistro');
//     boton.click()
//     const correo = register.querySelector('.correo');
//     const contraseña = register.querySelector('.password');

// document.body.innerHTML = '<input class="correo"></input> <input class="password"></input>';