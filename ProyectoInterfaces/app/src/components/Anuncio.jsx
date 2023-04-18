import React from "react";
import anunciosServices from "../services/anunciosServices";
import appServices from "../services/appServices";

export default function Anuncio({anuncio, idUsuarioRegistrado, favoritos}) {

    const procesarFavoritos = (idUsuario, idAnuncio) => {
        let element = document.getElementById(idAnuncio);

        if(element.classList.contains("fa-heart-o")){
            element.classList.remove("fa-heart-o");
            element.classList.add("fa-heart");
            element.classList.add("fa-solid");
            element.classList.add("fav-icon");
            anunciosServices.addToFavoritos(idUsuario, idAnuncio);
        } else{
            element.classList.remove("fa-heart");
            element.classList.remove("fa-solid");
            element.classList.remove("fav-icon");
            element.classList.add("fa-heart-o");
            anunciosServices.deleteFavorito(idUsuario, idAnuncio);
        }
    }

    const findAnuncioEnFavoritos = (anuncioId) => {
        let i = 0;
        while (i < favoritos.length && favoritos[i].anuncio_id !== anuncioId) {
            i++;
        }
        
        return i < favoritos.length;
    }

    const procesarBorradoAnuncio = (anuncio) => {

    }

    return(
        <>
        <div className='card anuncio'>
            <div className='card-header anuncio-header'>
                Subido por 
                {idUsuarioRegistrado === anuncio.idUsuario?
                <> ti</>
                :
                <a href={"/profile/" + anuncio.username}> {anuncio.username}</a>     
                }
                <span className="wish-icon favorito">
                    {anuncio.idUsuario !== idUsuarioRegistrado && 
                    <i id={anuncio.idAnuncio} className={findAnuncioEnFavoritos(anuncio.idAnuncio)? "fa fa-heart fa-solid fav-icon" : "fa fa-heart-o"} 
                         onClick={() => procesarFavoritos(idUsuarioRegistrado, anuncio.idAnuncio)}></i>}
                </span>
            </div>
            <div className='card-body anuncio-thumbnail'>
                <div className='placement-imagen'>
                    <img src={anuncio.imagen}/>
                </div>
                <div className='anuncio-info'>
                    <p className='nombre-anuncio'>{anuncio.nombre}</p>
                    <p className='precio-anuncio'><b>{anuncio.precio} €</b></p> <span style={{float: 'right'}}>{anuncio.fecha_subida.toString().substring(0,10)}</span>
                </div>
            </div>
            <div className='card-body prueba'>
                <br/>
                {idUsuarioRegistrado === anuncio.idUsuario?
                <button className='button-anuncio elimina' onClick={() => procesarBorradoAnuncio(anuncio)}>Eliminar</button>
                :
                <button className='button-anuncio contacta' onClick={() => appServices.openChat(anuncio.idAnuncio)}>Contacta</button>}
                <button className='button-anuncio info'>+ Info</button>
            </div>
        </div>
        </>
    )
}