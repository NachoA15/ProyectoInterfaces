import React from "react";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Anuncio from "../Anuncios/Anuncio";
import anunciosServices from "../../services/anunciosServices";

export default function AnunciosUsuario({idUsuario, idUsuarioRegistrado}) {

    const [anuncios, setAnuncios] = useState([]);


    useEffect(() => {
        anunciosServices.getAnunciosByUser(idUsuario, setAnuncios);
    }, []);

    return(
        <>
        <div className="item active">
            <div className="row">
                {anuncios.map((anuncio, key) => {
                    return( 
                        <div className='placement-anuncios' key={key}>
                            <Anuncio anuncio={anuncio} anuncios={anuncios} setAnuncios={setAnuncios} idUsuarioRegistrado={idUsuarioRegistrado} favoritos={[]}/>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    )
}