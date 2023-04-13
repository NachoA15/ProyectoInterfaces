import Axios from 'axios';
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import appServices from './appServices';

const addUsuario = (usuario) => {
    if (usuario[1] === usuario[2]) {    // Comprueba las contraseñas
        Axios.post("http://localhost:3001/addUsuario", {
            username: usuario[0],
            password: usuario[1],
            nombre: usuario[3],
            correo: usuario[4],
            telefono: usuario[5],
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

const checkUsuarioLogin = (username, password, setUsuarioRegistrado) => {
    Axios.post("http://localhost:3001/getUsuario", {
        username: username,
        password: password
    }).then((u) => {
        if (u.data.length <= 0) {
            swal({
                title: 'El usuario no existe.',
                text: 'El usuario introducido no se ha encontrado. Por favor, pruebe otra vez o cree una cuenta si no tiene una.',
                icon: 'error'
            })  
        } else {
            setUsuarioRegistrado(u.data);
            appServices.moveToProfile(u.data.username)
        }
    })
}

const userServices = {addUsuario, checkUsuarioLogin};

export default userServices;