import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import '../../assets/css/productsPage.css'

export default function Products() {
    return(
        <>
        <div id='productsNav'>
            <NavbarRegistration />
        </div>

        <br/>
        <br/>
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
                            <div class="col-sm-3">
                                <div class="thumb-wrapper">
                                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                    <div class="img-box">
                                        <img src="./src/assets/images/guitarraElectrica.jpg" class="img-responsive" alt=""/>									
                                    </div>
                                    <div class="thumb-content">
                                        <h4>Guitarra eléctrica</h4>									
                                        
                                        <p class="item-price"><b>$369.00</b></p>
                                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                    </div>						
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="thumb-wrapper">
                                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                    <div class="img-box">
                                        <img src="./src/assets/images/teclado.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <div class="thumb-content">
                                        <h4>Teclado</h4>									
                                        
                                        <p class="item-price"><b>$23.99</b></p>
                                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                    </div>						
                                </div>
                            </div>		
                            <div class="col-sm-3">
                                <div class="thumb-wrapper">
                                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                    
                                    <div class="img-box">
                                        <img src="./src/assets/images/flautaTravesera.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <div class="thumb-content">
                                        <h4>Flauta travesera</h4>									
                                        
                                        <p class="item-price">$649.00</p>
                                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                    </div>						
                                </div>
                            </div>								
                            <div class="col-sm-3">
                                <div class="thumb-wrapper">
                                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                    <div class="img-box">
                                        <img src="/examples/images/products/nikon.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <div class="thumb-content">
                                        <h4>Nikon DSLR</h4>									
                                        
                                        <p class="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
                                        <a href="#" class="btn btn-primary">Add to Cart</a>
                                    </div>						
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <p class="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                                        
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
                                        <p class="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                                        
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
                                        <p class="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                                       
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
                                        <p class="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                                        
                                        <a href="#" class="btn btn-primary">Add to Cart</a>
                                    </div>						
                                </div>
                            </div>						
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


        </>
    )
}