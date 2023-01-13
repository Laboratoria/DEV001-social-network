# FestiFan

## Índice

* [1. Introducción](#1-Introducción)
* [2. Objetivo del proyecto](#2-Objetivo-del-proyecto)
* [3. Historia de usuario ](#3-Historia-de-usuario)
* [4. Prototipo del proyecto](#4-Prototipo-del-proyecto)
* [5. Implementación final](#5-Implementación-final)

## 1. Intoducción
En el presente documento se plasma el desarrollo del proyecto **Social Network: Festifan** elaborado como parte de la currícula del bootcamp de Laboratoria - cohort DEV001. A cargo del equipo DL14: Carolina Velásquez Rodríguez, Marlizeth Tapia y Gabriela González Herrera. 
Social Network Festifan es una páguina web que simula una red social donde las personas que gusten de festivales musicales y conciertos podran encontrarse e interactuar sobre temas en común.
A continuación se muestra la planeación y desarrollo del proyecto.

## 2. Objetivo del proyecto 

Con este proyecto el equipo desarrollo los siguientes objetivos:

* Desarrollar una SPA con temática de red social
* Aplicar los conceptos de responsividad en el desarrollo de las vistas (templates)
* Implementar un router para la navegación entre las diferentes vistas de la aplicación
* Emplear un servicio externo para la persistencia de datos de la aplicación
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

Para lograr estos objetivos, deberás aprender y hacer uso de las siguientes
herramientas o habilidades técnicas:

## 3. Historias de usuario


**HU1:** Como usuario de FestiFan quiero poder hacer una cuenta y logearme para acceder al sitio.

**Criterios de aceptación:**

* Poder registrarme usando un correo electrónico y contraseña.
* Poder registrarme utilizando una cuenta de Google.
* Poder ingresar al sitio con una cuenta y contraseña previamente registradas.
* Que se permita el acceso desde distintos dispositivos.
* El input de contraseña debe ser secreto.
* Poder identificar las siguientes validaciones:
    - Verificar que se permita el acceso a usuarios con cuentas válidas.
    - Validar que no usuarios repetidos.
    - Comprobar que la cuenta de correo electrónico sea válido.
    - Validar si la contraseña es incorrecta o no cumple con tener al menos de 6 digitos.
* Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.
* 


**HU2:** Como usuario quisiera poder crear, editar y borrar una publicación para compartir mis experiencias y expresar mis dudas.

**Criterios de aceptación:**

* Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.
* Poder publicar un post.
* Poder eliminar un post específico.
* Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
* Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
* Al recargar la página se podrán ver los textos editados.

**HU3:** Como usuario de FestiFan quiero poder ver las publicaciones ordenadas de la más reciente a la mas antigua y saber su fecha y hora.

**Criterios de aceptación:**

* Cada post debera contener la fecha y hora en la que fue realizado.
* Poder ver el post más reciente en la parte superior del feed.

De las historias de usuario descritas anteriormente se consideró la siguiente **definición de terminado:**

* Debe ser una SPA.
* Debe ser responsive.
* Deben haber recibido code review de al menos una compañera de otro equipo.
* Hicimos los test unitarios
* Testeamos manualmente buscando errores e imperfecciones simples.
* Hicimos pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
* Desplegamos la aplicación y etiquetamos la versión (git tag).

## 4. Prototipo del proyecto

**Prototipo mobile** (captura de figma version mobile)
![PrototipoMobile](https://user-images.githubusercontent.com/114185794/211085134-0b9dd1d9-593f-48e3-9c8b-ddb09e728f97.PNG)




**Prototipo Desktop** (captura de figma version Desktop)
![Prototipo2 desktop](https://user-images.githubusercontent.com/114185794/211085188-119fc002-766b-43b5-a50d-a3d4e9e01a2f.PNG)




## 5. Implementación final

**Versión mobile**
![VersionMobile](https://user-images.githubusercontent.com/114185794/211085218-d0082339-6012-49ff-9c73-51d55131805c.PNG)




**Versión Desktop**
![version2 Desktop](https://user-images.githubusercontent.com/114185794/211085283-d387c783-b1a9-4c70-8750-276294d4d76d.png)




