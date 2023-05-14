import React, { useState } from "react";
import { useEffect } from "react";
import anunciosServices from "../../services/anunciosServices";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import '../../assets/css/productPage.css'
import { ReactSession } from "react-client-session";

export default function Product() {

    const idUsuarioRegistrado = ReactSession.get("id");

    let params = useParams();
    let idAnuncio = params.idAnuncio;

    const [producto, setProducto] = useState(null);


    useEffect(() => {
        anunciosServices.getAnuncioById(idAnuncio, setProducto);
    }, []) 

    return(
        <>
        <div id='productsNav'>
            <NavBar ubicacion={''}/>
        </div>

        <br/>
        <br/>

        <div className="container mt-5 mb-5">	
            <div className="card card-anuncio">	
                <div className="row">	
                    <div className="col border-end"> 
                        {producto !== null && <img id="product-image" src={producto.imagen}/>}
                    </div>	
                    <div className="col-md-6"> 	
                        <div className="p-3 right-side">	
                            <div className="d-flex justify-content-between align-items-center">	
                                <h3>{producto !== null && producto.nombre}</h3>	
                                <span className="heart"><i class='bx bx-heart'></i></span>	
                            </div>	
                            <div className="mt-2 pr-3 content">	
                                <p>{producto !== null && producto.descripcion? producto.descripcion : 'Este producto no tiene descripción.'}</p>	
                            </div>	
                            <h3>{producto !== null && producto.precio} €</h3>	
                            <div className="d-flex flex-row align-items-center">	
                                <span>Subido el {producto !== null && producto.fecha_subida.toString().substring(0,10)} por <a href={"/profile/" + (producto !== null && producto.username)}>{producto !== null && producto.username}</a></span>	
                            </div>	
                            <div className="buttons d-flex flex-row mt-5 gap-3" >
                                {producto !== null && idUsuarioRegistrado === producto.idUsuario?
                                <button className="btn btn-outline-dark" onClick={() => anunciosServices.processDeleteAnuncio(producto,null,null,'product')}>Eliminar anuncio</button>	
                                :
                                <button className="btn btn-outline-dark" onClick={() => appServices.openChat(producto.idAnuncio, idUsuarioRegistrado)}>Contacta</button>	
                                }	
                            </div>	
                        </div>
                    </div>	
                </div>	
            </div> 
        </div>
        </>
    )
}