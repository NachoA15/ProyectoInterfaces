import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import NavbarFavourites from './NavBarFavourites'
import { ReactSession } from "react-client-session";

import FavouriteProducts from './FavouriteProducts';
import FavouriteInfo from './FavouriteInfo';

import '../../assets/css/productsPage.css'

export default function Favourites() {

    const [anuncios, setAnuncios] = useState([])

    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        Axios.post("http://127.0.0.1:3001/getFavoritos", {
            user: idUsuarioRegistrado
        })
        .then((res) => {
            setAnuncios(res.data)
        })
    }, []);


    return(
        <>
        <div id='productsNav'>
            <NavbarFavourites />
        </div>

        <br/>
        <br/>
        
        {anuncios.length === 0? <FavouriteInfo /> : <FavouriteProducts anuncios={anuncios} setAnuncios={setAnuncios} idUsuarioRegistrado={idUsuarioRegistrado}/>}

        </>
    )
}