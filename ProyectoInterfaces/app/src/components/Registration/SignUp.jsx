import React from 'react';
import NavbarRegistration from './NavbarRegistration'

export default function SignUp() {
    return(
        <>
        <NavbarRegistration />
        <div id='signUpForm'>
            <form method='post' action=''>
                <br/>
                <div class='container center' style={{ maxWidth: 800 }}>
                    <div class='card bg-light border-dark mb-3'>
                        <div class="card-body">
                            <div class="row text-center">
                                <h2 class="card-title" >Crea tu cuenta:</h2>
                                
                            </div>
                            <br/>
                            <div class="row text-left">
                                <div class="col-md-3">
                                    <label class="card-text h6" for='usuario'>Usuario:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="card-text" type='text' name='usuario'></input> 
                                </div>
                            </div>
                            <br/>
                            <div class="row text-left">
                                <div class="col-md-3">
                                    <label class="card-text h6" for='clave'>Contraseña:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="card-text" type='password' name='clave'></input>
                                </div>
                            </div>
                            <br/>
                            <div class="row text-left">
                                <div class="col-md-3">
                                    <label class="card-text h6" for='claveConfirmacion'>Confirmación Contraseña:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="card-text" type='password' name='confirmacionClave'></input>
                                </div>
                            </div>
                            <br/>
                                
                        </div> 
                        
                    </div>
                </div>

                <div class='container center' style={{ maxWidth: 800 }}>
                    <div class='card bg-light border-dark mb-3'>
                        <div class="card-body">
                            <div class="row text-center">
                                <h2 class="card-title" >Información personal:</h2>
                                
                            </div>
                            <br/>
                            <div class="row text-left">
                                <div class="col-md-3">
                                    <label class="card-text h6" for='nombre'>Nombre Completo:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="card-text" type='text' name='nombre'></input> 
                                </div>
                            </div>
                            <br/>
                            <div class="row text-left">
                                <div class="col-md-3">
                                    <label class="card-text h6" for='correo'>Correo electrónico:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="card-text" type='email' name='email'></input> <br/>
                                </div>
                            </div>
                            <br/>
                            <div class="row text-left">
                                <div class="col-md-3">
                                    <label class="card-text h6" for='telefono'>Teléfono:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="card-text" type='telefono' name='telefono'></input> <br/>
                                </div>
                            </div>
                            <br/>    
                        </div> 
                    </div>
                </div>
                <div class='container' style={{ maxWidth: 150 }}>
                    <button type="submit" class="btn btn-outline-dark">Confirmar</button>
                </div>
                
            </form>
        </div>
        </>
    )
}
