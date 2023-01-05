import { doc } from "firebase/firestore";
import { publicarPost } from "../Firebase";

export const Wall = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'contenedorMuro';

    const publicacionesDiv = document.createElement('div');
    //INPUT POST
    const post = document.createElement('textarea');
    post.className = 'post';
    post.placeholder = '¿Qué quieres recomendar?';
    HomeDiv.appendChild(post);


    //BOTÓN POST
    const botonPost = document.createElement('button');
    botonPost.className = 'botonpost';
    botonPost.textContent = 'Postear';
    HomeDiv.appendChild(botonPost);

    //BOTÓN CERRAR SESIÓN
    const buttonHome = document.createElement('button');
    buttonHome.className = 'salida2';

    buttonHome.textContent = 'Cerrar Sesión';

    buttonHome.addEventListener('click', () => onNavigate('/'));
    HomeDiv.appendChild(buttonHome);

    //FUNCION POSTEO


    botonPost.addEventListener('click', (e) => {
        e.preventDefault()
        let posteo = document.getElementsByClassName('post')[0].value;

        publicarPost(posteo).then((exito) => {
            console.log(exito);

            contenido.innerHTML = '' //Se limpian los datos

            mostrar.forEach(doc => {

                    const mostrarPublicacion = doc.data()
                    contenido += `
                   <div>
                   <h3>${mostrarPublicacion.contenidoPost} 


                    `
                }

            )

            publicacionesDiv.innerHTML = contenido;


        }).catch((error) => {
            console.log(error);
        })
    })

    //         const mostrartodo = (mostrar) => { //Antes de hacer lo que sea hay que limpiar el espacio*****
    //             tarjeta.innerHTML = '' //Se limpian los datos


    // }
    return HomeDiv;



}