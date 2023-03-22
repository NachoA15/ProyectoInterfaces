import React from 'react';
import NavbarRegistration from './NavBarLogin';
import {TextField} from '@mui/material'
import '../../assets/css/login.css'

export default function Login() {
    return(
        <>
        <div id='navbarLocation'>
            <NavbarRegistration />
        </div>
        
        <div id='loginForm'>
            <form method='post' action=''>
                
                <div class='container center' style={{ maxWidth: 450 }}>
                    <div class='card bg-light'>
                        <div class="card-body">
                            <div class="row text-center">
                                <h3 class="card-title" >Accede a tu cuenta</h3>
                            </div>
                            
                            <div class="row text-left">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div>
                                        <TextField
                                        
                                        id="usuario"
                                        label="Usuario"
                                        variant="standard"
                                        size="small"
                                        
                                        />
                                        
                                    </div>
                                </div>
                                <div class="col-md-2"></div>
                            </div>

                            <br/>

                            <div class="row text-left">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div>
                                        <TextField
                                        
                                        id="password"
                                        label="Contraseña"
                                        type="password"
                                        variant="standard"
                                        size="small"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-2"></div>
                            </div>

                            <br/>
                        </div> 
                        
                    </div>
                </div>

                
                <br/>
                <div class='container' style={{ maxWidth: 150 }}>
                    <button type="submit" class="btn btn-outline-primary">Confirmar</button>
                </div>
                
            </form>
            <br/>

            <div class='container ' style={{ maxWidth: 300}}>
                <h6>
                    ¿Aun no tienes una cuenta?
                    <a href="/signUp"> Regístrate</a>
                </h6>
            </div>
            
            
        </div>
        

        </>
    )
}