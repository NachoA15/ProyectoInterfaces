import React from "react";
import ErrorImg from '../assets/images/errorrec.jpg';
import NavbarError from "./NavbarError";
import '../assets/css/error.css';

export default function ErrorPage() {
    return(
        <>
            <NavbarError />
            <br/>
            <br/>
            <img id="error" src={ErrorImg} tabIndex={0} alt="Error. No se ha encontrado el recurso solicitado."/>
        </>
    )
}