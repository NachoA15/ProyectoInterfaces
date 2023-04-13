import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import '../../assets/css/productsPage.css'

export default function Products() {
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
                    
                    <div class="carousel-inner">
                        <div class="item active">
                            <div class="row">
                                <div style={{width: 320, height: 320}}>
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon" ><i id="corazon" class="fa fa-heart-o"  onClick={() => favorito("corazon")}></i></span>
                                        <div class="img-box">
                                            <img src="./src/assets/images/guitarraElectrica.jpg" class="img-responsive" alt=""/>									
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Guitarra eléctrica</h4>									
                                            <br/>
                                            <p class="item-price"><h6>369.00€</h6></p>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary">Contactar</a>
                                                </div>
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary">+ info</a>
                                                </div>  
                                                
                                                
                                            </div>
                                            
                                        </div>						
                                    </div>
                                </div>
                                <div style={{width: 320, height: 320}}>
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i id="corazon1" class="fa fa-heart-o"  onClick={() => favorito("corazon1")} ></i></span>
                                        <div class="img-box">
                                            <img src="./src/assets/images/teclado.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Teclado</h4>									
                                            <br/>
                                            <p class="item-price"><h6>23.99€</h6></p>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary">Contactar</a>
                                                </div>
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary">+ info</a>
                                                </div>  
                                                
                                                
                                            </div>
                                            
                                        </div>						
                                    </div>
                                </div>		
                                <div style={{width: 320, height: 320}}>
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon"><i id="corazon2" class="fa fa-heart-o"  onClick={() => favorito("corazon2")}></i></span>
                                        
                                        <div class="img-box">
                                            <img src="./src/assets/images/flautaTravesera.jpg" class="img-responsive" alt=""/>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Flauta travesera</h4>									
                                            <br/>
                                            <p class="item-price"><h6>649.00€</h6></p>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary">Contactar</a>
                                                </div>
                                                <div class="col-sm-6">
                                                    <a href="#" class="btn btn-primary">+ info</a>
                                                </div>  
                                                
                                                
                                            </div>
                                            
                                        </div>						
                                    </div>
                                </div>			
                                
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

