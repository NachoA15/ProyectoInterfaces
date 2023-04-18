import React from "react";
import anunciosServices from "../../services/anunciosServices";

export default function FavouriteProducts({anuncios, setAnuncios, idUsuarioRegistrado}) {

    const eliminarDeFavoritos = (idUsuario, idAnuncio) => {
        anunciosServices.deleteFavorito(idUsuario, idAnuncio);
        setAnuncios(anuncios.filter((anuncio) => anuncio.idAnuncio !== idAnuncio))
    }

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2><b>Anuncios marcados como favoritos</b></h2>
                        <div className="item active">
                            <div className="row">
                                {anuncios.map((anuncio, key) => {
                                    return( 
                                        <div className='placement-anuncios' key={key}>
                                            <div className='card anuncio'>
                                                <div className='card-header anuncio-header'>
                                                    Subido por <a href={"/profile/" + anuncio.username}>{anuncio.username}</a> 
                                                    <span className="wish-icon favorito">
                                                        {anuncio.idUsuario !== idUsuarioRegistrado && 
                                                            <i id={anuncio.idAnuncio} className="fa fa-heart fa-solid fav-icon" 
                                                            onClick={() => eliminarDeFavoritos(idUsuarioRegistrado, anuncio.idAnuncio)}></i>}
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
                                                    <button className='button-anuncio contacta'>Contacta</button>
                                                    <button className='button-anuncio info'>+ Info</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}