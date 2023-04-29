import React from "react";
import Anuncio from "../Anuncios/Anuncio";

export default function FavouriteProducts({favoritos, setFavoritos, idUsuarioRegistrado}) {

    return(
        <>
        <div className="container-fluid full-screen">
            <div className="row">
                <div className="col-md-12">
                    <h2 tabindex="0"><b>Anuncios marcados como favoritos</b></h2>
                        <div className="item active">
                            <div className="row">
                                {favoritos.map((anuncio, key) => {
                                    return( 
                                        <div className='placement-anuncios' key={key}>
                                            <Anuncio anuncio={anuncio} idUsuarioRegistrado={idUsuarioRegistrado} favoritos={favoritos} setFavoritos={setFavoritos}/>
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