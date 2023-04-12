import React from "react";

export default function EditProfile() {
    return(
        <>
        <div id='NavbarProfile'>
            <NavbarProfile />
        </div>

        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-12 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex row text-center justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Editar perfil</h4>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <label class="control-label small" for="file_img">Cambiar foto de perfil (.jpg/.png):</label> <input type="file" name="file_img"/>
                            </div>

                        </div>
                        <div class="mt-3">
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-4"><TextField id="usuario" label="Usuario" variant="standard" size="small"/></div>
                                <div class="col-md-4"></div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-4"><TextField id="nombre" label="Nombre Completo" variant="standard" size="small"/></div>
                                <div class="col-md-4"></div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-4"><TextField id="email" label="Correo Electrónico" variant="standard" size="small"/></div>
                                <div class="col-md-4"></div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-4"><TextField id="teléfono" label="Número de Teléfono" variant="standard" size="small"/></div>
                                <div class="col-md-4"></div>
                            </div>
                            <br/>
                        </div>
                        <div class="mt-3">
                            <div class="row">
                                <div class="col-md-5"></div>
                                <div class="col-md-2 text-center"><button class="btn btn-primary profile-button" type="button">Guardar cambios</button></div>
                                <div class="col-md-5"></div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}