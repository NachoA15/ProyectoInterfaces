import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import '../../assets/css/productsPage.css'
import axios from 'axios';


export default function Products() {
    let anuncios;
    axios.get("http://127.0.0.1:3001/anuncios")
    .then(response => {
        anuncios = response.data;
    })
    console.log("Datos de anuncios:" + anuncios)
    /*let anuncios = [
        {
            name: "Juanjo",
            price: 356.00,
            src: "1234"
        },
        {
            name: "Pepe",
            price: 123.00,
            src: "1234"
        }
    ];*/

    function favorito(identificador){
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
            <NavbarRegistration />
        </div>

        <br/>
        <br/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
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
                                                            <a href="#" className="btn btn-primary" style={{height: 60}}>Contactar</a>
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
                    
                    <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="carousel-control right" href="#myCarousel" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
                </div>
            </div>
        </div>


        </>
    )

    
}

