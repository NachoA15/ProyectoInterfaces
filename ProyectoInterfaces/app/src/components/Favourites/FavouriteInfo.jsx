import React from "react";
import "../../assets/css/favouriteinfo.css";

export default function FavouriteInfo() {

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div id="placement-info">
                    <h2><b>No tienes ningún anuncio en favoritos</b></h2>
                    <br/>
                    <div className="item-active">
                        <div className="row">
                            <div className="col-1"/>
                            <div className="col">
                                <br/>
                                <p>Para marcar o desmarcar un anuncio como favorito haz clic en el icono&nbsp;
                                    <i id="prueba" className="fa fa-heart-o"></i>&nbsp;situado 
                                en la esquina superior derecha de aquellos anuncios que haya subido otro usuario.</p>
                                <br/>
                                <p>Aquí podrás visualizar cada anuncio que hayas marcado como favorito hasta que los desmarques o el autor decida borrarlo.</p>
                                <br/>
                            </div>
                            <div className="col-1"/>
                            <div className="col">
                                <div className='card anuncio' style={{width:400}}>
                                        <div className='card-header anuncio-header'>
                                            Ejemplo de anuncio
                                            <span className="wish-icon favorito">
                                                    <i className="fa fa-heart-o"></i>
                                            </span>
                                            </div>
                                        <div className='card-body anuncio-thumbnail'>
                                            <div className='placement-imagen'>
                                                
                                            </div>
                                            <div className='anuncio-info'>
                                                <p className='nombre-anuncio'>Título</p>
                                                <p><b>Precio</b></p>
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