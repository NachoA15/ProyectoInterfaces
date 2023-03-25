import React from 'react';
import '../../assets/css/NavBarProductsPage.css'



export default function NavbarProductsPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="productsNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Aquí el nombre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"> <a className="nav-link" href="/">Inicio</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/profile">Perfil</a></li>
                            <li className="nav-item"> <a href="/" class="carrito"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></a> </li> 
                            <li className="nav-item"> <a href="/addProduct" class="addProducts"><i class="fa fa-plus-square fa-2x" aria-hidden="true"> Subir producto</i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}