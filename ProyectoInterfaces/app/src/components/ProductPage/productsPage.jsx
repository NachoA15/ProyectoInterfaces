import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import anunciosServices from '../../services/anunciosServices';
import '../../assets/css/productsPage.css'

export default function Products() {
    
    const [anuncios, setAnuncios] = useState([]);
    const [favoritos, setFavoritos] = useState([]);


    useEffect(() => {
        Axios.get("http://127.0.0.1:3001/anuncios")
        .then((res) => {
            setAnuncios(res.data)
        })
    }, []);

    /*useEffect(() => {
        Axios.post("http://127.0.0.1:3001/anuncios")
    });*/


    const addToFavoritos = (idUsuario, idAnuncio) => {

        var element = document.getElementById(idAnuncio);
        if(element.classList.contains("fa-heart-o")){
            element.classList.remove("fa-heart-o");
            element.classList.add("fa-heart");
            anunciosServices.addToFavoritos(idUsuario, idAnuncio);
        } else{
            element.classList.remove("fa-heart");
            element.classList.add("fa-heart-o");
        }
    }

    return(
        <>
        <div id='productsNav'>
            <NavbarRegistration />
        </div>

        <br/>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2>Productos <b>Destacados</b></h2>
                        <div className="item active">
                            <div className="row">
                                {anuncios.map((anuncio, key) => {
                                    return( 
                                        <div className='placement-anuncios' key={key}>
                                            <div className='card anuncio'>
                                                <div className='card-header anuncio-header'>
                                                    Subido por <a href={"/profile/" + anuncio.username}>{anuncio.username}</a> 
                                                    <span className="wish-icon favorito">
                                                        <i id={anuncio.idAnuncio} className="fa fa-heart-o" onClick={() => addToFavoritos(anuncio.idUsuario, anuncio.idAnuncio)}></i>
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
                                                    <button className='button-anuncio contacta'>Contacta</button>
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

