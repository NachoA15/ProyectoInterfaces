import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ReactSession } from "react-client-session";
import anunciosServices from '../../services/anunciosServices';
import Anuncio from '../Anuncios/Anuncio';
import Filter from './Filter';
import NavBar from '../NavBar';
import '../../assets/css/productsPage.css'
import '../../assets/css/searchbar.css'

export default function Products() {
    
    const [anuncios, setAnuncios] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [filtrando, setFiltrando] = useState(false);
    const [favoritos, setFavoritos] = useState([]);

    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        anunciosServices.getAnuncios(setAnuncios);
    }, []);

    useEffect(() => {
        anunciosServices.getIdFavoritos(idUsuarioRegistrado, setFavoritos);
    }, []);

    let resultados = filtrando? filtro : anuncios;

    return(
        <>
        <div id='productsNav'>
            <NavBar ubicacion={'Productos'}/>
        </div>

        <br/>
        <br/>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2 tabIndex="0"><b>Sección de los anuncios</b></h2>
                    <Filter anuncios={anuncios} setFiltro={setFiltro} setFiltrando={setFiltrando} filtrando={filtrando}/>
                    <br/>
                    <br/>
                    <div className="item active">
                        <div className="row">
                            {resultados.map((anuncio, key) => {
                                return( 
                                    <div className='placement-anuncios' key={key}>
                                        <Anuncio anuncio={anuncio} anuncios={anuncios} setAnuncios={setAnuncios} idUsuarioRegistrado={idUsuarioRegistrado} favoritos={favoritos} setFavoritos={setFavoritos}/>
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