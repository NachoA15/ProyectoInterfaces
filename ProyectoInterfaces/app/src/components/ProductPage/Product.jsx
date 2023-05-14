import React, { useState } from "react";
import { useEffect } from "react";
import anunciosServices from "../../services/anunciosServices";
import appServices from "../../services/appServices";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import '../../assets/css/productPage.css'
import { ReactSession } from "react-client-session";

export default function Product() {

    const idUsuarioRegistrado = ReactSession.get("id");
    const sound = new Audio('/src/assets/audios/favorito.mp3');

    let params = useParams();
    let idAnuncio = params.idAnuncio;

    const [producto, setProducto] = useState(null);
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        anunciosServices.getAnuncioById(idAnuncio, setProducto);
    }, []) 

    useEffect(() => {
        anunciosServices.getIdFavoritos(idUsuarioRegistrado, setFavoritos);
    }, []);

    const procesarFavoritos = (idUsuario, idAnuncio) => {
        let element = document.getElementById(idAnuncio);

        if(element.classList.contains("fa-heart-o")){
            element.classList.remove("fa-heart-o");
            element.classList.add("fa-heart");
            element.classList.add("fa-solid");
            element.classList.add("fav-icon");
            anunciosServices.addToFavoritos(idUsuario, idAnuncio);
            sound.play();
            
        } else{
            element.classList.remove("fa-heart");
            element.classList.remove("fa-solid");
            element.classList.remove("fav-icon");
            element.classList.add("fa-heart-o");
            anunciosServices.deleteFavorito(idUsuario, idAnuncio);
            setFavoritos(favoritos.filter((anuncio) => anuncio.idAnuncio !== idAnuncio));
            sound.play();
        }
    }

    const findAnuncioEnFavoritos = (anuncioId) => {
        let i = 0;
        while (i < favoritos.length && favoritos[i].idAnuncio !== anuncioId) {
            i++;
        }

        return i < favoritos.length;
    }

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
                                <span className="wish-icon favorito">
                                    {producto !== null && producto.idUsuario !== idUsuarioRegistrado && 
                                    <i aria-label="marcar como favorito" id={producto.idAnuncio} className={findAnuncioEnFavoritos(producto.idAnuncio)? "fa fa-heart fa-solid fav-icon" : "fa fa-heart-o"} 
                                        onClick={() => procesarFavoritos(idUsuarioRegistrado, producto.idAnuncio)} 
                                        onKeyDown={(event) => {
                                            if (event.code === "Enter" || event.code === "Space") {
                                                procesarFavoritos(idUsuarioRegistrado, producto.idAnuncio);
                                            }
                                        }} tabIndex="0"></i>}
                                </span>
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
                                <button className="btn card-button" onClick={() => anunciosServices.processDeleteAnuncio(producto,null,null,'product')}>Eliminar anuncio</button>	
                                :
                                <button className="btn card-button" onClick={() => appServices.openChat(producto.idAnuncio, idUsuarioRegistrado)}>Contacta</button>	
                                }	
                            </div>	
                            <br/>
                            <br/>
                            <button className="btn card-button" onClick={() => appServices.moveToProducts()}>Ir a productos</button>
                        </div>
                    </div>	
                </div>	
            </div> 
        </div>
        </>
    )
}