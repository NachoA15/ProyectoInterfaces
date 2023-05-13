import React from "react";
import anunciosServices from "../../services/anunciosServices";
import appServices from "../../services/appServices";
import Swal from 'sweetalert2';
import { ReactSession } from "react-client-session";


export default function Anuncio({anuncio, anuncios, setAnuncios, idUsuarioRegistrado, favoritos, setFavoritos}) {
    let myId = ReactSession.get("id");
    const sound = new Audio('/src/assets/audios/favorito.mp3');

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
        <div className='card anuncio' tabIndex="0" aria-label={anuncio.nombre}>
            <div className='card-header anuncio-header' tabIndex="0">
                Subido por 
                {idUsuarioRegistrado === anuncio.idUsuario?
                <> ti</>
                :
                <a href={"/profile/" + anuncio.username}> {anuncio.username}</a>     
                }
                <span className="wish-icon favorito">
                    {anuncio.idUsuario !== idUsuarioRegistrado && 
                    <i aria-label="marcar como favorito" id={anuncio.idAnuncio} className={findAnuncioEnFavoritos(anuncio.idAnuncio)? "fa fa-heart fa-solid fav-icon" : "fa fa-heart-o"} 
                         onClick={() => procesarFavoritos(idUsuarioRegistrado, anuncio.idAnuncio)} 
                         onKeyDown={(event) => {
                            if (event.code === "Enter" || event.code === "Space") {
                                procesarFavoritos(idUsuarioRegistrado, anuncio.idAnuncio);
                            }
                        }} tabIndex="0"></i>}
                </span>
            </div>
            <div className='card-body anuncio-thumbnail' style={{width: '100%'}}>
                <div className='placement-imagen'>
                    <img src={anuncio.imagen} alt={anuncio.descripcion === null? anuncio.nombre + '. Este anuncio no tiene descripción.' : anuncio.nombre + '. Descripción: ' + anuncio.descripcion} 
                    tabIndex="0" onClick={() => appServices.moveToProductPage(anuncio.idAnuncio)}/>
                </div>
                <div className='anuncio-info'>
                    <p className='nombre-anuncio' tabIndex="0">{anuncio.nombre}</p>
                    <p className='precio-anuncio' tabIndex="0"><b>{anuncio.precio} €</b></p> <span style={{float: 'right'}} tabIndex="0">{anuncio.fecha_subida.toString().substring(0,10)}</span>
                </div>
            </div>
            <div className='card-body' style={{width: '100%'}}>
                <br/>
                {idUsuarioRegistrado === anuncio.idUsuario?
                <button className='button-anuncio elimina' onClick={() => {anunciosServices.processDeleteAnuncio(anuncio, anuncios, setAnuncios, 'products')}}>Eliminar</button>
                :
                <button className='button-anuncio contacta' onClick={() => appServices.openChat(anuncio.idAnuncio, myId)}>Contacta</button>}
                <button className='button-anuncio info' onClick={() => appServices.moveToProductPage(anuncio.idAnuncio)}>+ Info</button>
            </div>
        </div>
        </>
    )
}