import Axios from 'axios';
import swal from 'sweetalert';
import appServices from './appServices';

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

const addProduct = (anuncio) => {
    Axios.post("http://localhost:3001/addProduct",{
        fecha_subida: anuncio[0],
        reservado: anuncio[1],
        nombre: anuncio[2],
        precio: anuncio[3],
        descripcion: anuncio[4],
        vendedor: anuncio[5],
        imagen: anuncio[6]
    }).then(() => {
        swal({
            title: 'Producto subido con éxito',
            icon: 'success',
            buttons: {
                aceptar: {
                    text: "Aceptar",
                    value: "ok",
                }
            }
        }).then((value) => {
            appServices.moveToProducts();
        })
    })
}

const anunciosServices = {addToFavoritos, deleteFavorito, addProduct}

export default anunciosServices;