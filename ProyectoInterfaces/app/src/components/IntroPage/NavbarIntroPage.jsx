import React from 'react';

export default function NavbarIntroPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="#intro">Aquí el nombre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="/products">Compra/vende equipo</a></li>
                            <li className="nav-item"><a className="nav-link" href="#interactua">Interactúa</a></li>
                            <li className="nav-item"><a className="nav-link" href="#sobre-nosotros">Sobre nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="/signUp">Regístrate</a></li>
                            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}