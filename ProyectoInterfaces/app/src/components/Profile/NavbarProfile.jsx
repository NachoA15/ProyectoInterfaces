import React from 'react';

export default function NavbarProfile() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="profilepNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Aquí el nombre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="/products">Productos</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#">Perfil</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}