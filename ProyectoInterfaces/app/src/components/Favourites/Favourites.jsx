import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import NavbarFavourites from './NavBarFavourites'
import '../../assets/css/productsPage.css'

export default function Favourites() {

    //const [favoritos, setFavoritos] = useState([]);

    const favoritos = [];

    /*useEffect(() => {
        Axios.get("http://127.0.0.1:3001/favoritos")
        .then((res) => {
            setFavoritos(res.data)
        })
    }, [])*/

    function favorito(identificador) {
        var element = document.getElementById(identificador);
        console.log(element);

       if(element != null){
            
            if(element.classList.contains("fa-heart-o")){
                element.classList.remove("fa-heart-o");
                element.classList.add("fa-heart");
            }else{
                element.classList.remove("fa-heart");
                element.classList.add("fa-heart-o");
            }
       }
    }


    return(
        <>
        <div id='productsNav'>
            <NavbarFavourites />
        </div>
        <div className="container-fluid">
            <div className="col-md-12">
                <h2>Mis productos favoritos</h2>
            </div>

            <div className="row">
                {favoritos.map((anuncio, key) => {
                    return( 
                        <div className="col-sm-3" key={key}>
                            <div className="thumb-wrapper">
                                <span className="wish-icon" ><i id="corazon" className="fa fa-heart-o"  onClick={() => favorito("corazon")}></i></span>
                                <div className="img-box">
                                    <img src={anuncio.src} className="img-responsive" alt=""/>									
                                </div>
                                <div className="thumb-content">
                                    <h4>{anuncio.nombre}</h4>									
                                    
                                    <p className="item-price"><b>{anuncio.precio}€</b></p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a href="#" className="btn btn-primary" style={{height: 60}}>Contactar con el vendedor</a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a href="#" className="btn btn-primary" style={{height: 60}}>Más información</a>
                                        </div>  
                                        
                                        
                                    </div>
                                    
                                </div>						
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
        </>
    )
}