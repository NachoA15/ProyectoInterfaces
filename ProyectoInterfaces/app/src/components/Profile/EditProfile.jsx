import React from "react";
import { useParams } from "react-router-dom";
import {TextField} from '@mui/material'
import '../../assets/css/editProfile.css'
import userServices from "../../services/userServices";
import NavBar from "../NavBar";

export default function EditProfile({usuarioPerfil, setEditando}) {

    let params = useParams();

    const procesarEmail = () => {
        if(usuarioPerfil.correo === null){
            return "";
        }else{
            return usuarioPerfil.correo;
        }
    }

    return(
        <>
        <div id='NavbarProfile'>
            <NavBar ubicacion={'Mi perfil'}/>
        </div>
        <br/>
        <br/>
        <div className="full-screen">
            <h2><b>Editar perfil</b></h2>

            <form onSubmit={(e) => {
            e.preventDefault();
            const username = document.getElementById('usuario').value;
            const imagen = document.getElementById('imagen').value;
            const nombre = document.getElementById('nombre').value;
            const localizacion = document.getElementById('localizacion').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const descripcion = document.getElementById('descripcion').value;
            
            
            
            userServices.updateUsuario(usuarioPerfil.id, username, imagen, nombre, localizacion, email, telefono, descripcion);
            }}>

            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
                <div className="card p-4"> 
                    <div className="d-flex row text-center justify-content-between align-items-center mb-3">
                    </div>
                    <div className="image d-flex flex-column justify-content-center align-items-center"> 
                        <button className="boton btn btn-secondary" > <img src={usuarioPerfil.imagen} height="100" width="100" /> </button> 
                        <br/>
                        <span><TextField id="imagen" name="nombre de usuario" label="Foto de perfil (URL)" variant="standard" size="small" defaultValue={usuarioPerfil.imagen}/></span> 
                        <br/>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span><TextField required id="usuario" name="nombre de usuario" label="Usuario" variant="standard" size="small" defaultValue={usuarioPerfil.username}/></span> 
                        </div>
                        <br/>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span ><TextField id="nombre" name="nombre completo" label="Nombre Completo" variant="standard" size="small" defaultValue={usuarioPerfil.nombre}/></span> 
                        </div>
                        <br/>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
                            <span ><TextField required id="localizacion" name="localizacion" label="Localizacion" variant="standard" size="small" defaultValue={usuarioPerfil.localizacion}/></span>
                        </div> 
                        <br/>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
                            <span ><TextField id="email" name="correo electrónico" label="Correo Electrónico" variant="standard" size="small" defaultValue={procesarEmail()}/></span> 
                        </div> 
                        <br/>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
                            <span><TextField id="telefono" name="teléfono" label="Número de Teléfono" variant="standard" size="small" defaultValue={usuarioPerfil.telefono}/></span>
                        </div> 
                        <br/>
                         <div class="col-md-8">
                            <div>
                              <TextField
                                id='descripcion'
                                name="descripción"
                                label='Descripción'
                                size='medium'
                                defaultValue={usuarioPerfil.descripcion}
                                multiline
                              />
                            </div>
                          </div> 
                        <br/>
                        <div className=" d-flex mt-2"> 
                            <button className="btn btn-dark profile-button" type="submit">Guardar cambios</button>
                        </div> 
                        <div className=" d-flex mt-2"> 
                            <button className="btn btn-dark profile-button" type="button" onClick={() => {
                                setEditando(false)
                            }}>Cancelar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}