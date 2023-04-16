import React from "react";
import { useParams } from "react-router-dom";
import {TextField} from '@mui/material'
import NavbarProfile from "./NavbarProfile";
import '../../assets/css/editProfile.css'

export default function EditProfile({usuarioPerfil}) {

    let params = useParams();
    let username = params.username;

    return(
        <>
        <div id='NavbarProfile'>
            <NavbarProfile />
        </div>
        <br/>
        

        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div class="card p-4"> 
            <div className="d-flex row text-center justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Editar perfil</h4>
            </div>
                <div class=" image d-flex flex-column justify-content-center align-items-center"> 
                    <button class="boton btn btn-secondary" > <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" height="100" width="100" /> </button> 
                    <br/>
                    <label className="control-label small" htmlFor="file_img">Cambiar foto de perfil (.jpg/.png):</label> <input type="file" name="file_img"/>
                    <br/>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span><TextField id="usuario" name="nombre de usuario" label="Usuario" variant="standard" size="small" defaultValue={usuarioPerfil.username}/></span> 
                    </div>
                    <br/>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span ><TextField id="nombre" name="nombre completo" label="Nombre Completo" variant="standard" size="small" defaultValue={usuarioPerfil.nombre}/></span> 
                
                    </div>
                    <br/>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                        <span ><TextField id="localizacion" name="localizacion" label="Localizacion" variant="standard" size="small" defaultValue={usuarioPerfil.localizacion}/></span>
                    </div> 
                    <br/>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                        <span ><TextField id="email" name="correo electrónico" label="Correo Electrónico" variant="standard" size="small" defaultValue={usuarioPerfil.correo}/></span> 
                    </div> 
                    <br/>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                        <span><TextField id="teléfono" name="teléfono" label="Número de Teléfono" variant="standard" size="small" defaultValue={usuarioPerfil.telefono}/></span>
                    </div> 
                    <br/>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                        <span><TextField id="descripcion" name="descripcion" label="Descripción" variant="standard" size="small" defaultValue={usuarioPerfil.descripcion} multiline/></span>
                    </div> 
                    <br/>
                    <div class=" d-flex mt-2"> 
                        <button className="btn btn-dark profile-button" type="button">Guardar cambios</button>
                    </div> 
                         
                </div> 
            </div>
        </div>
        </>
    )
}