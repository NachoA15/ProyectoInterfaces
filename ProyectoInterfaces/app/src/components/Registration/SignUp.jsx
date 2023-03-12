import React from 'react';
import NavbarRegistration from './NavBarRegistration'
import {TextField} from '@mui/material'
import '../../assets/css/signUp.css'


export default function SignUp() {
    return(
        <>
        <div id='navBarRegistration'>
            <NavbarRegistration />
        </div>
        
        <div id='signUpForm'>
            <form method='post' action=''>
                <br/>
                <br/>
                <br/>
                <div class='container center' style={{ maxWidth: 450 }}>
                    <div class='card bg-light'>
                        <div class="card-body">
                            <div class="row text-center">
                                <h3 class="card-title" >Aquí el nombre o el logo</h3>
                            </div>
                            <div class="row text-center">
                                <h4 id="registrarTitulo" class="card-title" >Regístrate:</h4>
                            </div>
                            
                            <div class="row text-center">
                                <h5>---------------- o ----------------</h5>
                            </div>
                            <div class="row text-left">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div>
                                        <TextField
                                        required
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
                                        required
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

                            <div class="row text-left">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div>
                                        <TextField
                                        required
                                        id="confirmarPassword"
                                        label="Confirmar Contraseña"
                                        type="password"
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
                                        id="nombreCompleto"
                                        label="Nombre Completo"
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
                                        id="correo"
                                        label="Correo Electrónico"
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
                                        id="telefono"
                                        label="Teléfono"
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
                    ¿Tienes una cuenta?
                    <a href="/login"> Entrar</a>
                </h6>
            </div>
            
            
        </div>
        
        </>
    )
}
