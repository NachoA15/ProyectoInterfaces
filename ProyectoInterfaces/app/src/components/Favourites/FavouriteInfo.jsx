import React, { useState } from "react";
import "../../assets/css/favouriteinfo.css";

export default function FavouriteInfo() {

    const [marcado, setMarcado] = useState(false)

    const cambiarIcono = () => {
        let element = document.getElementById("prueba");

        if(element.classList.contains("fa-heart-o")){
            element.classList.remove("fa-heart-o");
            element.classList.add("fa-heart");
            element.classList.add("fa-solid");
            element.classList.add("fav-icon");
            setMarcado(true);
        } else{
            element.classList.remove("fa-heart");
            element.classList.remove("fa-solid");
            element.classList.remove("fav-icon");
            element.classList.add("fa-heart-o");
            setMarcado(false);
        }
    }


    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div id="placement-info">
                    <h2 tabindex="0"><b>No tienes ningún anuncio en favoritos</b></h2>
                    <br/>
                    <div className="item-active">
                        <div className="row">
                            <div className="col-1"/>
                            <div className="col">
                                <br/>
                                <p tabindex="0">Para marcar o desmarcar un anuncio como favorito haz clic en el icono&nbsp;
                                    <i className="fa fa-heart-o"></i>&nbsp;situado 
                                en la esquina superior derecha de aquellos anuncios que haya subido otro usuario.</p>
                                <br/>
                                <p tabindex="0">Aquí podrás visualizar cada anuncio que hayas marcado como favorito hasta que los desmarques o el autor decida borrarlo.</p>
                                <br/>
                                <p tabindex="0">¡Prueba en la figura!</p>
                            </div>
                            <div className="col-1"/>
                            <div className="col">
                                <div className='card anuncio' style={{width:400}}>
                                        <div className='card-header anuncio-header' tabindex="0">
                                            Ejemplo de anuncio
                                            <span className="wish-icon favorito">
                                                    <i id="prueba" aria-label="marcar como favorito"  className="fa fa-heart-o" tabindex="0" onClick={() => cambiarIcono()}></i>
                                            </span>
                                            </div>
                                        <div className='card-body anuncio-thumbnail'>
                                            <div className='placement-imagen'>
                                                {!marcado?
                                                    <p className="fav-info" tabindex="0">El anuncio no está marcado como favorito</p>
                                                    :
                                                    <p className="fav-info" tabindex="0">El anuncio ahora sí está marcado como favorito</p>
                                                }
                                            </div>
                                            <div className='anuncio-info'>
                                                <p className='nombre-anuncio' tabindex="0">Título</p>
                                                <p tabindex="0"><b>Precio</b></p>
                                            </div>
                                        </div>
                                        <div className='card-body prueba'>
                                            <br/>
                                            <button className='button-anuncio contacta'>Contacta</button>
                                            <button className='button-anuncio info'>+ Info</button>
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