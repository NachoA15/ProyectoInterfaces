import Axios from 'axios';
import swal from 'sweetalert';
import appServices from './appServices';

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
        precio: anuncio[3].replace(",","."),
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

const deleteAnuncio = (anuncio) => {

}

const anunciosServices = {getAnuncios, getFavoritos, getAnunciosByUser, addToFavoritos, deleteFavorito, addProduct, deleteAnuncio}

export default anunciosServices;