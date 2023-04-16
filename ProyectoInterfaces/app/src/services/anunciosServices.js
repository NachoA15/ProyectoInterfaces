import Axios from 'axios';

const addToFavoritos = (userId, anuncioId) => {
    Axios.post("http://localhost:3001/addToFavoritos", {
        user: userId,
        anuncio: anuncioId
    })
}

const anunciosServices = {addToFavoritos}

export default anunciosServices;