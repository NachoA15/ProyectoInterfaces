import Axios from 'axios';

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

const anunciosServices = {addToFavoritos, deleteFavorito}

export default anunciosServices;