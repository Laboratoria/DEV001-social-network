import { collection, doc, onSnapshot } from "firebase/firestore";
import { db, publicarPost, subscribeCollection, eliminarPublicacion } from "../Firebase";
import { Home } from "./Home";

export const Wall = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'contenedorMuro';

    const publicacionesDiv = document.createElement('div');
    publicacionesDiv.id = 'publicaciones';
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

    onSnapshot(collection(db, 'Post'), querySnapshot => {
        publicacionesDiv.innerHTML = '';
        console.log('HA HABIDO UN CAMBIO EN LA BASE DE DATOS')

        querySnapshot.forEach(doc => {
            console.log(doc.id)
            let contenidoPost = document.createElement("p"); //creo una variable para las fotos de la data
            let nombreUsuario = document.createElement("p"); //el nombre del pokemon de la data
            let email = document.createElement("p"); //el número del pokemon extraído de la data
            let date = document.createElement("p");

            const botonEliminar = document.createElement('button');
            botonEliminar.className = 'eliminar';
            botonEliminar.textContent = 'Borrar Post';
            botonEliminar.setAttribute("data-id", doc.id);

            const botonEditar = document.createElement('button');
            botonEditar.className = 'editar';
            botonEditar.textContent = 'Editar';
            botonEditar.setAttribute("data-id", doc.id);


            contenidoPost.innerHTML = `${doc.data().contenidoPost}`
            nombreUsuario.innerHTML = `${doc.data().nombreUsuario}`
            email.innerHTML = `${doc.data().email}`
            date.innerHTML = `${doc.data().date}`
            publicacionesDiv.appendChild(contenidoPost);
            publicacionesDiv.appendChild(nombreUsuario);
            publicacionesDiv.appendChild(email);
            publicacionesDiv.appendChild(date);
            publicacionesDiv.appendChild(botonEditar);
            publicacionesDiv.appendChild(botonEliminar);


        })


        const botonesEliminar = publicacionesDiv.querySelectorAll('.eliminar');
        // console.log(botonesEliminar)

        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', ({ target: { dataset } }) => {
                eliminarPublicacion(dataset.id)
            })

        })
        const botonesEditar = publicacionesDiv.querySelectorAll('.editar');
        botonesEditar.forEach(boton => {
            console.log(boton)
        })

    })



    HomeDiv.appendChild(publicacionesDiv)


    //FUNCION POSTEO

    botonPost.addEventListener('click', (e) => {
        e.preventDefault()
        let posteo = document.getElementsByClassName('post')[0].value;

        publicarPost(posteo).then((exito) => {
            console.log(exito);




        }).catch((error) => {
            console.log(error);
        })
    })


    return HomeDiv;



}