import React from "react";
import Anuncio from "../Anuncios/Anuncio";

export default function ViewMyProducts({anuncios, setAnuncios, idUsuarioRegistrado}) {
    return(
        <>
        <div className="container-fluid full-screen">
            <div className="row">
                <div className="col-md-12">
                    <h2 tabindex="0"><b>Mis anuncios</b></h2>
                        <div className="item active">
                            <div className="row">
                                {anuncios.map((anuncio, key) => {
                                    return( 
                                        <div className='placement-anuncios' key={key}>
                                            <Anuncio anuncio={anuncio} anuncios={anuncios} setAnuncios={setAnuncios} idUsuarioRegistrado={idUsuarioRegistrado}/>
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