import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import '../../assets/css/productsPage.css'
import axios from 'axios';


export default function Products() {
    //let anuncios = axios.get(process.env.API_URL + "/getAnuncios")
    let anuncios = [
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
    ];

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
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                    
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>   
                    <div class="carousel-inner">
                        <div class="item active">
                            <div class="row">
                                {anuncios.map(element => {
                                    return( <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon" ><i id="corazon" class="fa fa-heart-o"  onClick={() => favorito("corazon")}></i></span>
                                        <div class="img-box">
                                            <img src={element.src} class="img-responsive" alt=""/>									
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{element.name}</h4>									
                                            
                                            <p class="item-price"><b>${element.price}</b></p>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary" style={{height: 60}}>Contactar con el vendedor</a>
                                                </div>
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary" style={{height: 60}}>Más información</a>
                                                </div>  
                                                
                                                
                                            </div>
                                            
                                        </div>						
                                    </div>
                                </div>)
                                })}
                                {/*					
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                        <div class="img-box">
                                            <img src="/examples/images/products/nikon.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Nikon DSLR</h4>									
                                            
                                            <p class="item-price"><b>$250.00</b></p>
                                            <div class="row">
                                                <div class="col-sm-7">
                                                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                                </div>
                                                <div class="col-sm-5">
                                                    <a href="#" class="btn btn-primary">Chatear</a>
                                                </div>  
                                                
                                                
                                            </div>
                                            
                                        </div>						
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                        {/*
                        <div class="item">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                        <div class="img-box">
                                            <img src="/examples/images/products/play-station.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Sony Play Station</h4>
                                            <p class="item-price"><span>$269.00</span></p>
                                            
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                        <div class="img-box">
                                            <img src="/examples/images/products/macbook-pro.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Macbook Pro</h4>
                                            <p class="item-price"><span>$869.00</span></p>
                                            
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                        <div class="img-box">
                                            <img src="/examples/images/products/speaker.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Bose Speaker</h4>
                                            <p class="item-price"><span>$99.00</span></p>
                                        
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                        <div class="img-box">
                                            <img src="/examples/images/products/galaxy.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Samsung Galaxy S8</h4>
                                            <p class="item-price"><span>$569.00</span></p>
                                            
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                        </div>						
                                    </div>
                                </div>						
                            </div>
                        </div>
                        */}
                        
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

