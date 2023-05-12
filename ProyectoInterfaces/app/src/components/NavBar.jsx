import React from "react";
import { useState } from "react";
import { ReactSession } from "react-client-session";
import appServices from "../services/appServices";
import Swal from 'sweetalert2';
import mAlert from '@massimo-cassandro/modal-alert';

export default function NavBar({ubicacion}) {
    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="profilepNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Piezzo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"> <a href="/addProduct" className="addProducts nav-link"><button type="button" className="btn btn-outline-light btn-sm subir-anuncio">Subir producto</button></a></li>
                            <li className="nav-item"><a className={ubicacion === 'Productos'? 'nav-link active' : 'nav-link'} href="/products">Productos</a></li>
                            <li className="nav-item"> <a className={ubicacion === 'Favoritos'? 'nav-link active' : 'nav-link'} href={"/favourites/" + ReactSession.get("username")}>Mis favoritos</a></li> 
                            <li className="nav-item"><a className={ubicacion === 'Mis chats'? 'nav-link active' : 'nav-link'} href="/chatList"> Mis chats</a></li> 
                            <li className="nav-item"><a className={ubicacion === 'Mis anuncios'? 'nav-link active' : 'nav-link'} href="/myProducts"> Mis anuncios</a></li> 
                            <li className="nav-item"><a className={ubicacion === 'Mi perfil'? 'nav-link active' : 'nav-link'} href={"/profile/" + ReactSession.get("username")}>Mi perfil</a></li>
                            <li className="nav-item"><a className="nav-link" href="/" onClick={(e) => {
                                e.preventDefault();
                                Swal.fire({
                                    icon: 'question',
                                    html: '<h3>¿Quiere cerrar sesión?</h3> Volverás a la página principal.',
                                    confirmButtonText: 'Sí',
                                    confirmButtonColor: 'green',
                                    showDenyButton: 'true',
                                    denyButtonText: 'No'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        ReactSession.set("username",null);
                                        ReactSession.set("id",null);
                                        appServices.moveToMainPage();
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