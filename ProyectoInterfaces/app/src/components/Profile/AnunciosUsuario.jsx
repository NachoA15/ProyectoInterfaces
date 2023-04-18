import React from "react";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Anuncio from '../Anuncio';

export default function AnunciosUsuario({idUsuario, idUsuarioRegistrado}) {

    const [anuncios, setAnuncios] = useState([]);


    useEffect(() => {
        Axios.post("http://127.0.0.1:3001/getAnunciosByUser", {
            user: idUsuario
        }).then((res) => {
            setAnuncios(res.data);
        })
    }, []);

    return(
        <>
        <div className="item active">
            <div className="row">
                {anuncios.map((anuncio, key) => {
                    return( 
                        <div className='placement-anuncios' key={key}>
                            <Anuncio anuncio={anuncio} idUsuarioRegistrado={idUsuarioRegistrado} favoritos={[]}/>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    )
}