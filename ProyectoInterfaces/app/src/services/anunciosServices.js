import Axios from 'axios';
import swal from 'sweetalert';
import appServices from './appServices';
import Swal from 'sweetalert2';

const getAnuncios = (setAnuncios) => {
    Axios.get("http://127.0.0.1:3001/anuncios")
    .then((res) => {
        setAnuncios(res.data)
    })
}

const getFavoritos = (idUsuario, setAnuncios) => {
    Axios.post("http://127.0.0.1:3001/getFavoritos", {
        user: idUsuario
    })
    .then((res) => {
        setAnuncios(res.data)
    })
}

const getIdFavoritos = (idUsuario, setFavoritos) => {
    Axios.post("http://127.0.0.1:3001/getIdFavoritos", {
        user: idUsuario
    }).then((res) => {
        setFavoritos(res.data)
    })
}

const addToFavoritos = (userId, anuncioId) => {
    Axios.post("http://localhost:3001/addToFavoritos", {
        user: userId,
        anuncio: anuncioId
    })
}

const deleteFavorito = (userId, anuncioId) => {
    Axios.post("http://localhost:3001/deleteFavorito", {
        user: userId,
        anuncio: anuncioId
    })
}

const proccessAddingProduct = (anuncio) => {
    
    // anuncio[4] corresponde a la descripción del producto

    if (anuncio[4] === null || anuncio[4] == '' || anuncio[4] == undefined) {
        Swal.fire({
            icon: 'question',
            html:
            '<h3>No tienes descripción para el anuncio.</h3>' + 
            'Vas a subir el anuncio sin ninguna descripción. ' + 
            '<br/><br/>Añadiendo una descripción no sólo aportarás más información' +
            ' acerca del producto que quieras vender, sino que además ayudarás a que personas invidentes puedan percibir tu anuncio' +
            ' de manera satisfactoria. ' +
            '<br/><br/>¿Estás seguro de que no quieres subir el anuncio sin ninguna descripción?',
            confirmButtonText: "Subir anuncio (sin descripción)",
            confirmButtonColor: '#00afe9',
            showCancelButton: 'true',
            cancelButtonText: 'Volver'
        }).then((res) => {
            if (res.isConfirmed) {
                addProduct(anuncio);
            }
        })
    } else {
        if (String(anuncio[4]).startsWith(' ')) {
            Swal.fire({
                icon: 'info',
                html:
                '<h3>No se puede subir el anuncio</h3>' + 
                'La descripción del anuncio no puede comenzar con un espacio. Por favor, cámbiela e inténtelo de nuevo.',
                confirmButtonColor: '#00afe9'
            })
        } else {
            addProduct(anuncio);
        }
    }
}

const addProduct = (anuncio) => {
    Axios.post("http://localhost:3001/addProduct",{
        fecha_subida: anuncio[0],
        reservado: anuncio[1],
        nombre: anuncio[2],
        precio: anuncio[3].replace(",","."),
        descripcion: anuncio[4],
        vendedor: anuncio[5],
        imagen: anuncio[6]
    }).then(() => {
        Swal.fire({
            icon: 'success',
            html:'<h3>Anuncio subido con éxito</h3>',
            confirmButtonColor: '#00afe9'
        }).then(() => {
            appServices.moveToProducts();
        })
    })
}

const getAnunciosByUser = (idUsuario, setAnuncios) => {
    Axios.post("http://127.0.0.1:3001/getAnunciosByUser", {
        user: idUsuario
    }).then((res) => {
        setAnuncios(res.data);
    })
}

const deleteAnuncioFromFavoritos = async (idAnuncio) => {
    Axios.post("http://127.0.0.1:3001/deleteFromFavoritos", {
        anuncio: idAnuncio
    })  
}

const processDeleteAnuncio = (anuncio, anuncios, setAnuncios, origen) => {
    Swal.fire({
        icon: 'warning',
        html:
            '<h3>¿Está seguro de que quiere borrar el anuncio?</h3>' + 
            'Va a borrar el anuncio "' + anuncio.nombre + '". Esta acción no se puede deshacer.',
        width: 650,
        showCancelButton: true,
        showDenyButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Cancelar',
        denyButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isDenied) {
            if (origen === 'products') {
                setAnuncios(anuncios.filter((a) => a.idAnuncio !== anuncio.idAnuncio));
            }
            deleteAnuncio(anuncio.idAnuncio);
            Swal.fire({
                icon: 'success',
                html:
                '<h3>Anuncio eliminado con éxito.</h3>' + 
                'El anuncio "' + anuncio.nombre + '" se ha eliminado satisfactoriamente.',
                confirmButtonColor: '#00afe9'
            }).then(() => {
                appServices.moveToProducts();
            });
        }
    })
}

const deleteAnuncio = (idAnuncio) => {
    deleteAnuncioFromFavoritos(idAnuncio);

    Axios.post("http://127.0.0.1:3001/deleteAnuncio", {
        anuncio: idAnuncio
    })  
}

const getAnuncioById = (idAnuncio, setAnuncio) => {
    Axios.post("http://127.0.0.1:3001/getAnuncioById", {
        anuncio: idAnuncio
    }).then((res) => {
        setAnuncio(res.data[0]);
    })
}

const anunciosServices = {getAnuncios, getFavoritos, getIdFavoritos, getAnunciosByUser, addToFavoritos, deleteFavorito, proccessAddingProduct, processDeleteAnuncio, deleteAnuncio, getAnuncioById}

export default anunciosServices;