import React from 'react';
import NavbarRegistration from './NavBarLogin';
import {TextField} from '@mui/material'
import { useState, useEffect } from "react";
import userServices from '../../services/userServices';
import '../../assets/css/login.css'

export default function Login() {

    const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);

    return(
        <>
        <div id='navbarLocation'>
            <NavbarRegistration />
        </div>
        
        <div className='full-screen'>
            <form onSubmit={(e) => {
                e.preventDefault();
                const username = document.getElementById('usuario').value;
                const password = document.getElementById('password').value;

                userServices.checkUsuarioLogin(username, password);
            }}>
                
                <div className='container center' style={{ maxWidth: 400 }}>
                    <div className='card bg-light' style={{width:'100%'}}>
                        <div className="card-body">
                            <div className="row text-center">
                                <h3 className="card-title" >Accede a tu cuenta</h3>
                            </div>
                            
                            <div className="row text-left">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div>
                                        <TextField
                                        id="usuario"
                                        name='usuario'
                                        label="Usuario"
                                        variant="standard"
                                        size="small"
                                        /> 
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>

                            <br/>

                            <div className="row text-left">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div>
                                        <TextField
                                        id="password"
                                        name='password'
                                        label="Contraseña"
                                        type="password"
                                        variant="standard"
                                        size="small"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>

                            <br/>
                        </div>     
                    </div>

                    <br/>
                    <div className='container' style={{ maxWidth: 150 }}>
                        <button type="submit" className="btn btn-outline-primary">Confirmar</button>
                    </div>
                    <br/>
                    <div className='container text-center' style={{ maxWidth: 350}}>
                        <h6>
                            ¿Aun no tienes una cuenta?
                            <a href="/signUp"> Regístrate</a>
                        </h6>
                    </div>
                    <br/>
                    <div className='container text-center' style={{ maxWidth: 300}}>
                        <h6>
                            
                            <a href="#"> ¿Has olvidado tu constraseña?</a>
                        </h6>
                    </div>   
                </div>
                
            </form>

            
            
        </div>
        </>
    )
}