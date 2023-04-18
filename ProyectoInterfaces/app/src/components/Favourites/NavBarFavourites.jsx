import React from 'react';
import '../../assets/css/NavBarProductsPage.css'
import { ReactSession } from "react-client-session";
import appServices from '../../services/appServices';

export default function NavbarProductsPage() {

    const usuarioRegistrado = ReactSession.get("username");
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="productsNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Piezzo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item"> <a href="/addProduct" className="addProducts nav-link"><button type="button" class="btn btn-outline-light btn-sm">Subir producto</button></a></li>
                            <li className="nav-item"><a className="nav-link" href="/products">Productos</a></li>
                            <li className="nav-item"> <a className="nav-link active" href="#" >Mis favoritos</a></li> 
                            <li className="nav-item"> <a className="nav-link" href={"/profile/" + usuarioRegistrado}>Mi perfil</a></li>  
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