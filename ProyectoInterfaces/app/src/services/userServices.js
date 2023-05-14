import Axios from 'axios';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
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
                Swal.fire({
                    icon: 'info',
                    html:
                    '<h3>Nombre de usuario duplicado</h3>' + 
                    'Ya existe otro usuario con el mismo username. Por favor, cámbielo e inténtelo de nuevo.',
                })
            } else if (res.data === 'duplicated_correo') {
                Swal.fire({
                    icon: 'info',
                    html:
                    '<h3>Correo duplicado</h3>' + 
                    'Ya existe otro usuario con el mismo correo. Por favor, cámbielo e inténtelo de nuevo.',
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
        Swal.fire({
            icon: 'error',
            html:
            '<h3>Upsss!!</h3>' + 
            'Las contraseñas no coinciden. Por favor, inténtelo de nuevo.',
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
            Swal.fire({
                icon: 'error',
                html:
                '<h3>El usuario no existe</h3>' + 
                'El usuario introducido no se ha encontrado. Por favor, pruebe otra vez o cree una cuenta si no tiene una.',
                confirmButtonText: 'Vale',
                confirmButtonColor: '#00afe9'   
            })
        } else {
            ReactSession.set("username", u.data[0].username);
            ReactSession.set("id", u.data[0].id);

            appServices.moveToProfile(u.data[0].username);
        }
    })
}

const updateUsuario = (usuarioId, username, imagen, nombre, localizacion, email, telefono, descripcion) => {

    if (imagen === null || imagen === undefined || imagen === '' || String(imagen).startsWith(' ')) {
        imagen = 'https://static.vecteezy.com/system/resources/previews/009/267/561/non_2x/user-icon-design-free-png.png';
    }

    if (nombre === '' || nombre === undefined) {
        nombre = null;
    }

    if (email === '' || email === undefined) {
        email = null;
    }

    if (telefono === '' || telefono === undefined) {
        telefono = null;
    }

    if (descripcion === '' || descripcion === undefined) {
        descripcion = null;
    }

    if (String(username).startsWith(' ')) {
        Swal.fire({
            icon: 'info',
            html:
            '<h3>No se puede editar el perfil.</h3>' + 
            'El nombre de usuario no puede comenzar con un espacio. Por favor, cámbielo e inténtelo de nuevo.',
            confirmButtonColor: '#00afe9'
        })
    } else if (String(localizacion).startsWith(' ')) {
        Swal.fire({
            icon: 'info',
            html:
            '<h3>No se puede editar el perfil.</h3>' + 
            'La localización no puede comenzar con un espacio. Por favor, cámbielo e inténtelo de nuevo.',
            confirmButtonColor: '#00afe9'
        })
    } else if (nombre !== null && String(nombre).startsWith(' ')) {
        Swal.fire({
            icon: 'info',
            html:
            '<h3>No se puede editar el perfil.</h3>' + 
            'El nombre completo no puede comenzar con un espacio. Por favor, cámbielo e inténtelo de nuevo.',
            confirmButtonColor: '#00afe9'
        })
    } else if (email !== null && String(email).startsWith(' ')) {
        Swal.fire({
            icon: 'info',
            html:
            '<h3>No se puede editar el perfil.</h3>' + 
            'El correo no puede comenzar con un espacio. Por favor, cámbielo e inténtelo de nuevo.',
            confirmButtonColor: '#00afe9'
        })
    } else if (telefono !== null && String(telefono).startsWith(' ')) {
        Swal.fire({
            icon: 'info',
            html:
            '<h3>No se puede editar el perfil.</h3>' + 
            'El teléfono no puede comenzar con un espacio. Por favor, cámbielo e inténtelo de nuevo.',
            confirmButtonColor: '#00afe9'
        })
    } else if (descripcion !== null && String(descripcion).startsWith(' ')) {
        Swal.fire({
            icon: 'info',
            html:
            '<h3>No se puede editar el perfil.</h3>' + 
            'La descripción no puede comenzar con un espacio. Por favor, cámbiela e inténtelo de nuevo.',
            confirmButtonColor: '#00afe9'
        })
    } else {
        Axios.post("http://localhost:3001/updateUsuario", {
        usuarioId : usuarioId,
        username : username,
        imagen: imagen,
        nombre : nombre,
        localizacion : localizacion,
        email : email,
        telefono : telefono, 
        descripcion : descripcion
        }).then((res) => {
            if (res.data === 'duplicated_username') {
                Swal.fire({
                    icon: 'info',
                    html:
                    '<h3>No se puede editar el perfil.</h3>' + 
                    'Ya existe otro usuario con el mismo username. Por favor, cámbielo e inténtelo de nuevo.',
                })
            } else if (res.data === 'duplicated_correo') {
                Swal.fire({
                    icon: 'info',
                    html:
                    '<h3>No se puede editar el perfil.</h3>' + 
                    'Ya existe otro usuario con el mismo correo. Por favor, cámbielo e inténtelo de nuevo.',
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    html:
                    '<h3>Perfil editado con éxito.</h3>' + 
                    'Los cambios se han guardado correctamente.',
                    confirmButtonColor: '#00afe9'
                }).then(() => {
                    ReactSession.set("username", username);
                    appServices.moveToProfile(username);
                })
            }
        })
    }
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

const getUsuarioByUsername = (username, setUsuarioPerfil) => {
    Axios.post("http://localhost:3001/getUsuarioByUsername", {
        username: username
    }).then((u) => {
        setUsuarioPerfil(u.data[0]);
    })
}


const userServices = {addUsuario, checkUsuarioLogin, updateUsuario, getComentariosByUser, addComment, getUsuarioByUsername};

export default userServices;