import React from 'react';
import NavbarProducts from './NavBarProductsPage'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ReactSession } from "react-client-session";
import anunciosServices from '../../services/anunciosServices';
import '../../assets/css/productsPage.css'
import '../../assets/css/searchbar.css'
import Anuncio from '../Anuncio';
import Filter from './Filter';

export default function Products() {
    
    const [anuncios, setAnuncios] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [filtrando, setFiltrando] = useState(false);
    const [favoritos, setFavoritos] = useState([]);

    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        Axios.get("http://127.0.0.1:3001/anuncios")
        .then((res) => {
            setAnuncios(res.data)
        })
    }, []);

    useEffect(() => {
        Axios.post("http://127.0.0.1:3001/getIdFavoritos", {
            user: idUsuarioRegistrado
        }).then((res) => {
            setFavoritos(res.data)
        })
    }, []);

    let resultados = filtrando? filtro : anuncios;

    return(
        <>
        <div id='productsNav'>
            <NavbarProducts />
        </div>

        <br/>
        <br/>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2><b>Sección de los anuncios</b></h2>
                    <Filter anuncios={anuncios} setFiltro={setFiltro} setFiltrando={setFiltrando} filtrando={filtrando}/>
                    <br/>
                    <br/>
                    <div className="item active">
                        <div className="row">
                            {resultados.map((anuncio, key) => {
                                return( 
                                    <div className='placement-anuncios' key={key}>
                                        <Anuncio anuncio={anuncio} idUsuarioRegistrado={idUsuarioRegistrado} favoritos={favoritos}/>
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