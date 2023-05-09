import React, { useEffect, useState } from "react";
import anunciosServices from "../../services/anunciosServices";
import { ReactSession } from "react-client-session";
import NavBar from "../NavBar";
import ViewMyProducts from "./ViewMyProducts";
import MyProductsInfo from "./MyProductsInfo";

export default function MyProducts() {
    const [anuncios, setAnuncios] = useState([]);
    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        anunciosServices.getAnunciosByUser(idUsuarioRegistrado, setAnuncios);
    }, [])

    return(
        <>
        <div id='productsNav'>
            <NavBar ubicacion={'Mis anuncios'}/>
        </div>

        <div className="container-fluid">
            {anuncios.length === 0? <MyProductsInfo /> : <ViewMyProducts anuncios={anuncios} setAnuncios={setAnuncios} idUsuarioRegistrado={idUsuarioRegistrado}/>}
        </div>
        </>
    )
}