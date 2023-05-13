import Axios from 'axios';
import swal from 'sweetalert'
import appServices from './appServices';
import { ReactSession } from "react-client-session";

const addUsuario = (usuario) => {
    if (usuario[1] === usuario[2]) {    // Comprueba las contraseñas
        Axios.post("http://localhost:3001/addUsuario", {
            username: usuario[0],
            password: usuario[1],
            nombre: usuario[3],
            correo: usuario[4],
            telefono: usuario[5],
            localizacion: usuario[6],
            imagen: usuario[7],
            valoracion: undefined
        }).then((res) => {
            if (res.data === 'duplicated_username') {
                swal({
                    title: 'Nombre de usuario duplicado',
                    text: 'Ya existe un usuario con el mismo nombre. Por favor, cámbielo e inténtelo de nuevo.',
                    icon: 'info',
                })
            } else if (res.data === 'duplicated_correo') {
                swal({
                    title: 'Correo duplicado',
                    text: 'Ya existe un usuario con el mismo correo. Por favor, cámbielo e inténtelo de nuevo.',
                    icon: 'info',
                })
            } else {
                swal({
                    title: 'Usuario creado con éxito',
                    text: '¡Ahora puedes iniciar sesión con tu cuenta!',
                    icon: 'success',
                    buttons: {
                        login: {
                            text: "Ve al login",
                            value: "login",
                        },
                        volver: {
                            text: "Volver a la página principal",
                        }
                    }
                }).then((value) => {

                    switch (value) {
                        case "login":
                            appServices.moveToLogin();
                            break;

                        default:
                            appServices.moveToMainPage();
                    }
                })
            }
        })

    } else {
        swal({
            title: 'Upsss!!',
            text: 'Las contraseñas no coinciden. Por favor, inténtelo de nuevo.',
            icon: 'error'
        })
    }
};

const checkUsuarioLogin = (username, password) => {
    Axios.post("http://localhost:3001/getUsuario", {
        username: username,
        password: password
    }).then((u) => {
        console.log(u.data)
        if (u.data.length <= 0) {
            swal({
                title: 'El usuario no existe.',
                text: 'El usuario introducido no se ha encontrado. Por favor, pruebe otra vez o cree una cuenta si no tiene una.',
                icon: 'error'
            })  
        } else {
            ReactSession.set("username", u.data[0].username);
            ReactSession.set("id", u.data[0].id);

            appServices.moveToProfile(u.data[0].username);
        }
    })
}

const updateUsuario = (usuarioId, username, imagen, nombre, localizacion, email, telefono, descripcion) => {
    Axios.post("http://localhost:3001/updateUsuario", {
      usuarioId : usuarioId,
      username : username,
      imagen: imagen,
      nombre : nombre,
      localizacion : localizacion,
      email : email,
      telefono : telefono, 
      descripcion : descripcion
    }).then((u) => {
        console.log(u.data)
        if (u.data.length <= 0) {
            swal({
                title: 'El usuario no existe.',
                text: 'El usuario introducido no se ha encontrado. Por favor, pruebe otra vez o cree una cuenta si no tiene una.',
                icon: 'error'
            })
        } else {
            swal({
                title: 'Perfil editado con éxito',
                text: 'Los cambios se han guardado correctamente',
                icon: 'success',
                buttons: {
                    aceptar: {
                        text: "Aceptar",
                        value: "ok",
                    }
                }
            }).then((value) => {
                ReactSession.set("username", username);
                appServices.moveToProfile(username);
            })
            
        }
    })
}

const getComentarios = (setComentarios) => {
    Axios.get("http://127.0.0.1:3001/comentarios")
    .then((res) => {
        setComentarios(res.data)
    })
}

const getComentariosByUser = (usuario, setComentarios) => {
    Axios.post("http://127.0.0.1:3001/getComentariosByUser", {
        user: usuario
    }).then((res) => {
        setComentarios(res.data)
    })
}

const addComment = (comentario) =>{
    Axios.post("http://localhost:3001/addComment",{
        usuario: comentario[0],    
        autor: comentario[1],
        fecha_publicacion: comentario[2],
        texto: comentario[3]
    }).then(() => {
        swal({
            title:"Comentario añadido correctamente",
            icon: 'success',
        }).then(() => {
            appServices.moveToProfile(comentario[4]);
        })
    })
}


const userServices = {addUsuario, checkUsuarioLogin, updateUsuario, getComentariosByUser, addComment};

export default userServices;