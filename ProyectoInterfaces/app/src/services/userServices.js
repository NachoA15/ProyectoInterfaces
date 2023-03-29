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
                Swal.fire({
                    title: 'No se puede crear el usuario',
                    text: 'Ya existe un usuario con el mismo nombre. Por favor, cámbielo e inténtelo de nuevo.',
                    icon: 'info',
                    confirmButtonText: 'Ok',
                })
            } else if (res.data === 'duplicated_correo') {
                Swal.fire({
                    title: 'No se puede crear el usuario',
                    text: 'Ya existe un usuario con el mismo correo. Por favor, cámbielo e inténtelo de nuevo.',
                    icon: 'info',
                    confirmButtonText: 'Ok',
                })
            } else {
                Swal.fire({
                    title: 'Usuario creado con éxito',
                    text: '¡Ahora puedes iniciar sesión con tu cuenta!',
                    icon: 'success',
                    confirmButtonText: 'Ve al login',
                }).then(() => {
                    appServices.moveToLogin();
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

const checkUsuario = (username, password, setUsuarioRegistrado) => {
    Axios.post("http://localhost:3001/checkUsuario", {
        username: username,
        password: password
    }).then((u) => {
        setUsuarioRegistrado(u.data);
    })
}

const userServices = {addUsuario, checkUsuario};

export default userServices;