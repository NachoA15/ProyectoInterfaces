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
                    
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>   
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="row">
                                {anuncios.map((anuncio, key) => {
                                    return( 
                                        <div className="col-sm-3" key={key}>
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon" ><i id="corazon" className="fa fa-heart-o"  onClick={() => favorito("corazon")}></i></span>
                                                <div className="img-box">
                                                    <img src={anuncio.src} className="img-responsive" alt=""/>									
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>{anuncio.nombre}</h4>									
                                                    
                                                    <p className="item-price"><b>${anuncio.precio}</b></p>
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
                                {/*					
                                <div className="col-sm-3">
                                    <div className="thumb-wrapper">
                                        <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                        <div className="img-box">
                                            <img src="/examples/images/products/nikon.jpg" className="img-responsive" alt=""/>
                                        </div>
                                        <div className="thumb-content">
                                            <h4>Nikon DSLR</h4>									
                                            
                                            <p className="item-price"><b>$250.00</b></p>
                                            <div className="row">
                                                <div className="col-sm-7">
                                                    <a href="#" className="btn btn-primary">Añadir al carrito</a>
                                                </div>
                                                <div className="col-sm-5">
                                                    <a href="#" className="btn btn-primary">Chatear</a>
                                                </div>  
                                                
                                                
                                            </div>
                                            
                                        </div>						
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                        {/*
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="thumb-wrapper">
                                        <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                        <div className="img-box">
                                            <img src="/examples/images/products/play-station.jpg" className="img-responsive" alt=""/>
                                        </div>
                                        <div className="thumb-content">
                                            <h4>Sony Play Station</h4>
                                            <p className="item-price"><span>$269.00</span></p>
                                            
                                            <a href="#" className="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumb-wrapper">
                                        <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                        <div className="img-box">
                                            <img src="/examples/images/products/macbook-pro.jpg" className="img-responsive" alt=""/>
                                        </div>
                                        <div className="thumb-content">
                                            <h4>Macbook Pro</h4>
                                            <p className="item-price"><span>$869.00</span></p>
                                            
                                            <a href="#" className="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumb-wrapper">
                                        <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                        <div className="img-box">
                                            <img src="/examples/images/products/speaker.jpg" className="img-responsive" alt=""/>
                                        </div>
                                        <div className="thumb-content">
                                            <h4>Bose Speaker</h4>
                                            <p className="item-price"><span>$99.00</span></p>
                                        
                                            <a href="#" className="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumb-wrapper">
                                        <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                        <div className="img-box">
                                            <img src="/examples/images/products/galaxy.jpg" className="img-responsive" alt=""/>
                                        </div>
                                        <div className="thumb-content">
                                            <h4>Samsung Galaxy S8</h4>
                                            <p className="item-price"><span>$569.00</span></p>
                                            
                                            <a href="#" className="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>						
                            </div>
                        </div>
                        */}
                        
                    </div>
                    
                    <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control right" href="#myCarousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
                </div>
            </div>
        </div>


        </>
    )

    
}

