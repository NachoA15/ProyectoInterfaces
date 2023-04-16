import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../../assets/css/productsPage.css'

export default function Products() {
    
    const [anuncios, setAnuncios] = useState([]);


    useEffect(() => {
        Axios.get("http://127.0.0.1:3001/anuncios")
        .then((res) => {
            setAnuncios(res.data)
        })
    }, [])

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
        {console.log(anuncios)}
        <div id='productsNav'>
            <NavbarRegistration />
        </div>

        <br/>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2>Productos <b>Destacados</b></h2>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="row">
                                {anuncios.map((anuncio, key) => {
                                    return( 
                                        <div style={{width: 320, height: 500}} key={key}>
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon" ><i id="corazon" className="fa fa-heart-o"  onClick={() => favorito("corazon")}></i></span>
                                                <div className="img-box">
                                                    <img src={anuncio.imageurl} className="img-responsive" alt=""/>									
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>{anuncio.nombre}</h4>									
                                                    
                                                    <p className="item-price"><b>{anuncio.precio}€</b></p>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <a href={"/chat/"+anuncio.id} className="btn btn-primary" style={{height: 60}}>Contactar</a>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <a href="#" className="btn btn-primary" style={{height: 60}}>+ info</a>
                                                        </div>  
                                                        
                                                        
                                                    </div>
                                                    
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
            </div>
        </div>


        </>
    )

    
}

