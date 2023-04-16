import React from 'react';
import NavbarProducts from './NavBarProductsPage'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ReactSession } from "react-client-session";
import anunciosServices from '../../services/anunciosServices';
import '../../assets/css/productsPage.css'
import appServices from '../../services/appServices';

export default function Products() {
    
    const [anuncios, setAnuncios] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        Axios.get("http://127.0.0.1:3001/anuncios")
        .then((res) => {
            setAnuncios(res.data)
        })
    }, []);

    useEffect(() => {
        Axios.post("http://127.0.0.1:3001/getIdFavoritos", {
            user: idUsuarioRegistrado
        }).then((res) => {
            setFavoritos(res.data)
        })
    }, []);


    const procesarFavoritos = (idUsuario, idAnuncio) => {
        let element = document.getElementById(idAnuncio);

        if(element.classList.contains("fa-heart-o")){
            element.classList.remove("fa-heart-o");
            element.classList.add("fa-heart");
            element.classList.add("fa-solid");
            element.classList.add("fav-icon");
            anunciosServices.addToFavoritos(idUsuario, idAnuncio);
        } else{
            element.classList.remove("fa-heart");
            element.classList.remove("fa-solid");
            element.classList.remove("fav-icon");
            element.classList.add("fa-heart-o");
            anunciosServices.deleteFavorito(idUsuario, idAnuncio);
        }
    }

    const findAnuncioEnFavoritos = (anuncioId) => {
        let i = 0;
        while (i < favoritos.length && favoritos[i].anuncio_id !== anuncioId) {
            i++;
        }
        
        return i < favoritos.length;
    }

    return(
        <>
        <div id='productsNav'>
            <NavbarProducts />
        </div>

        <br/>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2><b>Sección de los anuncios</b></h2>
                        <div className="item active">
                            <div className="row">
                                {anuncios.map((anuncio, key) => {
                                    return( 
                                        <div className='placement-anuncios' key={key}>
                                            <div className='card anuncio'>
                                                <div className='card-header anuncio-header'>
                                                    Subido por <a href={"/profile/" + anuncio.username}>{anuncio.username}</a> 
                                                    <span className="wish-icon favorito">
                                                        {anuncio.idUsuario !== idUsuarioRegistrado && 
                                                            <i id={anuncio.idAnuncio} className={findAnuncioEnFavoritos(anuncio.idAnuncio)? "fa fa-heart fa-solid fav-icon" : "fa fa-heart-o"} 
                                                            onClick={() => procesarFavoritos(idUsuarioRegistrado, anuncio.idAnuncio)}></i>}
                                                    </span>
                                                </div>
                                                <div className='card-body anuncio-thumbnail'>
                                                    <div className='placement-imagen'>
                                                        <img src={anuncio.imagen}/>
                                                    </div>
                                                    <div className='anuncio-info'>
                                                        <p className='nombre-anuncio'>{anuncio.nombre}</p>
                                                        <p><b>{anuncio.precio} €</b></p>
                                                    </div>
                                                </div>
                                                <div className='card-body prueba'>
                                                    <br/>
                                                    <button className='button-anuncio contacta' onClick={() => appServices.openChat(anuncio.id)}>Contacta</button>
                                                    <button className='button-anuncio info'>+ Info</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )

    
}