import React from "react";

export default function Filter({anuncios, setFiltro, setFiltrando, filtrando}) {

    const filtrarAnunciosPorCadena = (cadena) => {
        setFiltro(anuncios.filter((anuncio) => anuncio.nombre.toLowerCase().includes(cadena.toLowerCase())));
        if (cadena.length > 0) {
            setFiltrando(true)
        } else {
            setFiltrando(false)
        }
    }

    return(
        <>
        <div className="box">
            <form name="search" onSubmit={(e) => e.preventDefault()}>
                <input id='searchbar' type="text" className="input" name="buscar" placeholder='Buscar...' onChange={() => filtrarAnunciosPorCadena(document.getElementById('searchbar').value)}/>
            </form>
            <i className="fa fa-search"></i>
        </div>
        </>
    )
}