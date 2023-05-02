import React from "react";
import anunciosServices from "../../services/anunciosServices";
import appServices from "../../services/appServices";
import Swal from 'sweetalert2'
import { ReactSession } from "react-client-session";


export default function Anuncio({anuncio, anuncios, setAnuncios, idUsuarioRegistrado, favoritos, setFavoritos}) {

    let myId = ReactSession.get("id");

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
            setFavoritos(favoritos.filter((anuncio) => anuncio.idAnuncio !== idAnuncio));
        }
    }

    const findAnuncioEnFavoritos = (anuncioId) => {
        let i = 0;
        while (i < favoritos.length && favoritos[i].idAnuncio !== anuncioId) {
            i++;
        }

        return i < favoritos.length;
    }

    const procesarBorradoAnuncio = (anuncio) => {
        Swal.fire({
            icon: 'warning',
            html:
                '<h3>¿Está seguro de que quiere borrar el anuncio?</h3>' + 
                'Va a borrar el anuncio "' + anuncio.nombre + '". Esta acción no se puede deshacer.',
            width: 650,
            showCancelButton: true,
            showDenyButton: true,
            showConfirmButton: false,
            cancelButtonText: 'Cancelar',
            denyButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isDenied) {
                setAnuncios(anuncios.filter((a) => a.idAnuncio !== anuncio.idAnuncio));
                anunciosServices.deleteAnuncio(anuncio.idAnuncio);
                Swal.fire({
                    icon: 'success',
                    html:
                    '<h3>Anuncio eliminado con éxito.</h3>' + 
                    'El anuncio "' + anuncio.nombre + '" se ha eliminado satisfactoriamente.',
                    confirmButtonColor: '#00afe9'
                });
            }
        })
    }

    return(
        <>
        <div className='card anuncio'>
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
            <div className='card-body anuncio-thumbnail'>
                <div className='placement-imagen'>
                    <img src={anuncio.imagen} alt={anuncio.nombre} tabIndex="0"/>
                </div>
                <div className='anuncio-info'>
                    <p className='nombre-anuncio' tabIndex="0">{anuncio.nombre}</p>
                    <p className='precio-anuncio' tabIndex="0"><b>{anuncio.precio} €</b></p> <span style={{float: 'right'}} tabIndex="0">{anuncio.fecha_subida.toString().substring(0,10)}</span>
                </div>
            </div>
            <div className='card-body prueba'>
                <br/>
                {idUsuarioRegistrado === anuncio.idUsuario?
                <button className='button-anuncio elimina' onClick={() => {procesarBorradoAnuncio(anuncio)}}>Eliminar</button>
                :
                <button className='button-anuncio contacta' onClick={() => appServices.openChat(anuncio.idAnuncio, myId)}>Contacta</button>}
                <button className='button-anuncio info'>+ Info</button>
            </div>
        </div>
        </>
    )
}