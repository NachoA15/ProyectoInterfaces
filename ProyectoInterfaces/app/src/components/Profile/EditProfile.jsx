import React from "react";
import { useParams } from "react-router-dom";
import {TextField} from '@mui/material'
import NavbarProfile from "./NavbarProfile";

export default function EditProfile() {

    let params = useParams();
    let username = params.username;

    console.log(username);

    return(
        <>
        <div id='NavbarProfile'>
            <NavbarProfile />
        </div>

        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-12 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex row text-center justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Editar perfil</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <label className="control-label small" htmlFor="file_img">Cambiar foto de perfil (.jpg/.png):</label> <input type="file" name="file_img"/>
                            </div>

                        </div>
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4"><TextField id="usuario" name="nombre de usuario" label="Usuario" variant="standard" size="small"/></div>
                                <div className="col-md-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4"><TextField id="nombre" name="nombre completo" label="Nombre Completo" variant="standard" size="small"/></div>
                                <div className="col-md-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4"><TextField id="email" name="correo electrónico" label="Correo Electrónico" variant="standard" size="small"/></div>
                                <div className="col-md-4"></div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4"><TextField id="teléfono" name="teléfono" label="Número de Teléfono" variant="standard" size="small"/></div>
                                <div className="col-md-4"></div>
                            </div>
                            <br/>
                        </div>
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-md-5"></div>
                                <div className="col-md-2 text-center"><button className="btn btn-primary profile-button" type="button">Guardar cambios</button></div>
                                <div className="col-md-5"></div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}