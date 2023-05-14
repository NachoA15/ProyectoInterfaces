import React from 'react';
import NavBar from '../NavBar';
import {FormControl, InputLabel, NativeSelect, Select, TextField} from '@mui/material'
import userServices from '../../services/userServices';
import anunciosServices from '../../services/anunciosServices';
import { ReactSession } from "react-client-session";

export default function addProduct() {

    const idUsuarioRegistrado = ReactSession.get("id");

    return(
        <>
        <div id='productsNav'>
            <NavBar />
        </div>
        <br/><br/>
        <div className="container">

          <section className="panel panel-default">

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

                  const anuncio = [fecha_subida, reservado, nombre, precio, descripcion, vendedor, imagen];
                  
                  anunciosServices.proccessAddingProduct(anuncio);
                }

              }}>
                <br/>
                <div className='container center' style={{ maxWidth: 450 }}>
                  <div className='card bg-light'>
                    <div className="card-body">
                      <div className="row text-center">
                        <h3 className="card-title" tabIndex="0">Introduzca la información del producto:</h3>
                        <h6 tabIndex="0">Los campos obligatorios se muestran con un asterisco (*)</h6>
                      </div>

                      <br/>

                      <div className="row text-left">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
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
                        <div className="col-md-2"></div>
                        </div>

                        <br/>

                        <div className="row text-left">
                          <div className="col-md-2"></div>
                          <div className="col-md-8">
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
                          <div className="col-md-2"></div>
                        </div>

                        <br/>
      
                        <div className="row text-left">
                          <div className="col-md-2"></div>
                          <div className="col-md-8">
                            <div>
                              <TextField
                                required
                                id='imagen'
                                label='Imagen (URL)'
                                variant="standard"
                                size='medium'
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
                                id="descripcion"
                                label="Descripción del producto"
                                size="small"
                                multiline
                                rows={5}
                              />
                            </div>
                          </div>
                          <div className="col-md-2"></div>
                        </div>

                        <br/>
                        
                        <div className='container' style={{ maxWidth: 150 }}>
                          <button type="submit" className="btn btn-outline-primary">Confirmar</button>
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