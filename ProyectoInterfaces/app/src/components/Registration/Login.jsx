import React from 'react';
import NavbarRegistration from './NavBarLogin';
import {TextField} from '@mui/material'
import { useState, useEffect } from "react";
import userServices from '../../services/userServices';
import '../../assets/css/login.css'

export default function Login() {
    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");

    const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);

    return(
        <>
        <div id='navbarLocation'>
            <NavbarRegistration />
        </div>
        
        <div id='loginForm'>
            <form onSubmit={(e) => {
                e.preventDefault();
                const username = document.getElementById('usuario').value;
                const password = document.getElementById('password').value;

                userServices.checkUsuarioLogin(username, password, setUsuarioRegistrado);
            }}>
                
                <div className='container center' style={{ maxWidth: 450 }}>
                    <div className='card bg-light'>
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
                                        label="Usuario"
                                        variant="standard"
                                        size="small"
                                        //onChange={(e) => setUsername(e.target.value)}
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
                                        label="Contraseña"
                                        type="password"
                                        variant="standard"
                                        size="small"
                                        //onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>

                            <br/>
                        </div> 
                        
                    </div>
                </div>

                
                <br/>
                <div className='container' style={{ maxWidth: 150 }}>
                    <button type="submit" className="btn btn-outline-primary">Confirmar</button>
                </div>
                
            </form>
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
        </>
    )
}