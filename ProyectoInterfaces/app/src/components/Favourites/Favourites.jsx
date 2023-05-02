import React from 'react';
import { useEffect, useState } from 'react';
import NavbarFavourites from './NavBarFavourites'
import { ReactSession } from "react-client-session";
import FavouriteProducts from './FavouriteProducts';
import FavouriteInfo from './FavouriteInfo';

import '../../assets/css/productsPage.css'
import anunciosServices from '../../services/anunciosServices';

export default function Favourites() {

    const [favoritos, setFavoritos] = useState([])

    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        anunciosServices.getFavoritos(idUsuarioRegistrado, setFavoritos);
    }, []);


    return(
        <>
        <div id='productsNav'>
            <NavbarFavourites />
        </div>
        
        <div className="container-fluid">
            <div className='favoritos'>
                {favoritos.length === 0? <FavouriteInfo /> : <FavouriteProducts favoritos={favoritos} setFavoritos={setFavoritos} idUsuarioRegistrado={idUsuarioRegistrado}/>}
            </div>
        </div>
        </>
    )
}