import React from 'react';
import { ReactSession } from "react-client-session";
import appServices from '../../services/appServices';
import swal from 'sweetalert'

export default function NavbarProfile() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="profilepNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Piezzo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item"> <a href="/addProduct" className="addProducts nav-link"><button type="button" className="btn btn-outline-light btn-sm subir-anuncio">Subir producto</button></a></li>
                            <li className="nav-item"><a className="nav-link" href="/products">Productos</a></li>
                            <li className="nav-item"> <a className="nav-link" href={"/favourites/" + ReactSession.get("username")} >Mis favoritos</a></li> 
                            <li className="nav-item"><a className="nav-link active" href={"/profile/" + ReactSession.get("username")}>Mi perfil</a></li>
                            <li className="nav-item"><a className="nav-link" href="/" onClick={(e) => {
                                e.preventDefault();
                                swal({
                                    title: 'Cerrar sesión',
                                    text: '¿Desea cerrar la sesión?',
                                    buttons: {
                                        Si: {
                                            text: "Sí",
                                            value: "si",
                                        },
                                        No: {
                                            text: "No",
                                            value: "no",
                                        }
                                    }
                                }).then((value) => {
                                    switch (value) {
                                        case "si":
                                            ReactSession.set("username",null);
                                            ReactSession.set("id",null);
                                            appServices.moveToMainPage();
                                            break;
                
                                        default:
                                            appServices.moveToProducts();
                                    }
                                })
                                
                            }}>Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}