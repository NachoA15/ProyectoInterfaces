import React from 'react';
import NavbarRegistration from './NavBarProductsPage'
import {FormControl, InputLabel, NativeSelect, Select, TextField} from '@mui/material'
import userServices from '../../services/userServices';
import anunciosServices from '../../services/anunciosServices';
import { ReactSession } from "react-client-session";

export default function addProduct() {

    const idUsuarioRegistrado = ReactSession.get("id");

    return(
        <>
        <div id='productsNav'>
            <NavbarRegistration />
        </div>
        <br/><br/>
        <div class="container">

          <section class="panel panel-default">

            <div id="addProductForm">

              <form onSubmit={(e) => {
                const fecha_subida = new Date();
                let reservado = 0;
                const nombre = document.getElementById('nombre').value;
                let precio = document.getElementById('precio').value;
                const descripcion = document.getElementById('descripcion').value;
                const vendedor = idUsuarioRegistrado;
                const imagen = document.getElementById('imagen').value;

                if(nombre !== '' && precio !== ''){
                  e.preventDefault();
                  const anuncio = [fecha_subida, reservado, nombre, precio, descripcion, vendedor, imagen]
                  anunciosServices.addProduct(anuncio)
                }

              }}>
                <br/>
                <div class='container center' style={{ maxWidth: 450 }}>
                  <div class='card bg-light'>
                    <div class="card-body">
                      <div class="row text-center">
                        <h3 class="card-title" tabindex="0">Introduzca la información del producto:</h3>
                        <h6 tabindex="0">Los campos obligatorios se muestran con un asterisco (*)</h6>
                      </div>
                      <br/>
                      <div class="row text-left">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                          <div>
                            <TextField
                              required
                              id="nombre"
                              label="Nombre del producto"
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
                                id="descripcion"
                                label="Descripción del producto"
                                variant="standard"
                                size="small"
                                multiline
                                maxRows={5}
                              />
                            </div>
                          </div>
                          <div class="col-md-2"></div>
                        </div>
                        <br/>
                        {/**
                         * 
                         * 
                         <div class="row text-left">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                             <div>
                               <FormControl size="small">
                                 <InputLabel variant="standard" id="categoria"> Categoria </InputLabel>
                                 <NativeSelect
                                   id="categoria"
                                   label="Categoria"
                                   variant="standard"  
                                 >
                                   <option value="viento">Viento</option>
                                   <option value="cuerda">Cuerda</option>
                                   <option value="percusion">Percusión</option>
                                   <option value="teclado">Teclado</option>
                                   <option value="accesorios">Accesorios</option>
                                   <option value="equipo">Equipo de Sonido</option>
                                 </NativeSelect>
                               </FormControl>
                             </div>
                           </div>
                         </div>
                         <br/>
                         * 
                         */}
                        <div class="row text-left">
                          <div class="col-md-2"></div>
                          <div class="col-md-8">
                            <div>
                              <TextField
                                required
                                id="precio"
                                label="Precio del producto"
                                variant="standard"
                                size="small"
                                inputProps={{inputMode: 'numeric', pattern: '[0-9,.]*'}}
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
                                id='imagen'
                                label='Imagen (URL)'
                                size='medium'
                              />
                            </div>
                          </div>
                          <div class="col-md-2"></div>
                        </div>
                        <br/>
                        
                        <div class='container' style={{ maxWidth: 150 }}>
                          <button type="submit" class="btn btn-outline-primary">Confirmar</button>
                        </div>

                    </div>                        
                  </div>
                  <br/>
                </div>

                <br/>
              </form>
            </div>
          </section>
        </div> 
                
        </>
    )
}