import React from 'react';
import NavbarRegistration from './NavBarRegistration'
import {TextField} from '@mui/material'
import userServices from '../../services/userServices';
import '../../assets/css/signUp.css'


export default function SignUp() {
    return(
        <>
        <div id='navBarRegistration'>
            <NavbarRegistration />
        </div>
        
        <div id='signUpForm'>
            <form onSubmit={(e) => {
                const username = document.getElementById('usuario').value;
                const password = document.getElementById('password').value;
                const confirmedPassword = document.getElementById('confirmarPassword').value;
                const nombre = document.getElementById('nombreCompleto').value;
                let correo = document.getElementById('correo').value;

                if (correo === "") correo = null;

                const telefono = document.getElementById('telefono').value;
                const localizacion = document.getElementById('localizacion').value;
                
                if (username !== '' && password !== '' && confirmedPassword !== '') {
                    e.preventDefault();
                    const usuario = [username,password,confirmedPassword,nombre,correo,telefono,localizacion]
                    userServices.addUsuario(usuario);
                }
            }}>
                <br/>
                <br/>
                <br/>
                <div className='container center' style={{ maxWidth: 450 }}>
                    <div className='card bg-light'>
                        <div className="card-body">
                            <div className="row text-center">
                                <h3 className="card-title" >Piezzo</h3>
                            </div>
                            <div className="row text-center">
                                <h4 id="registrarTitulo" className="card-title" >Regístrate:</h4>
                            </div>
                            <div className="row text-center">
                                <h6 id="obligatorio" className="card-body">Los campos obligatorios se muestran con un asterisco (*).</h6>
                            </div>
                            
                            <div className="row text-left">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div>
                                        <TextField
                                        required
                                        id="usuario"
                                        name='nombre de usuario'
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
                                        required
                                        id="password"
                                        name='contraseña'
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

                            <div className="row text-left">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div>
                                        <TextField
                                        required
                                        id="confirmarPassword"
                                        name='confirmar contraseña'
                                        label="Confirmar Contraseña"
                                        type="password"
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
                                        required
                                        id="localizacion"
                                        name='localización'
                                        label="Localización"
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
                                        id="nombreCompleto"
                                        name='nombre completo'
                                        label="Nombre Completo"
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
                                        id="correo"
                                        name='correo electrónico'
                                        label="Correo Electrónico"
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
                                        id="telefono"
                                        name='teléfono'
                                        label="Teléfono"
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
                </div>
                <br/>
                
                <div className='container' style={{ maxWidth: 150 }}>
                        <button className="btn btn-outline-primary" type='submit'>Confirmar</button>
                </div>
            </form>


            <br/>

            <div className='container text-center' style={{ maxWidth: 300}}>
                <h6>
                    ¿Ya tienes una cuenta?
                    <a href="/login"> Entrar</a>
                </h6>
            </div>
            
            <br/>
            
        </div>
        
        </>
    )
}
