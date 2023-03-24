import React from 'react';
import NavbarRegistration from './NavBarProductsPage'


export default function addProduct() {
    return(
        <>
        <div id='productsNav'>
            <NavbarRegistration />
        </div>

        <div class="container">

          <section class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Panel heading</h3>
            </div>

            <div class="panel-body">

              <form action="designer-finish.html" class="form-horizontal" role="form">

                {/** 
                 *
                 *  
                <div class="form-group">
                  <label for="name" class="col-sm-3 control-label">FORMULARIO</label>
                  <div class="col-sm-9">
                    <label class="radio-inline">
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    </label>
                    <label class="radio-inline">
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    </label>
                  </div>
                </div>
                  
                */}

                <div class="form-group">
                  <label for="name" class="col-sm-3 control-label">Nombre del producto</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Nombre del producto"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="name" class="col-sm-3 control-label">Categoría</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Categoría"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="about" class="col-sm-3 control-label">Descripción</label>
                  <div class="col-sm-9">
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label for="qty" class="col-sm-3 control-label">Modelo</label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Edad del producto</label>
                  <div class="col-sm-3">
                    <label class="control-label small" for="date_start">Indicar fecha o año de compra: </label>
                    <input type="text" class="form-control" name="date_start" id="date_start" placeholder="Fecha de compra"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="name" class="col-sm-3 control-label">Imagen del producto</label>
                  <div class="col-sm-3">
                    <label class="control-label small" for="file_img">Imagen (jpg/png):</label> <input type="file" name="file_img"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="tech" class="col-sm-3 control-label">Motivo de venta</label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <hr/>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-9">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                  </div>
                </div>
              </form>

            </div>
          </section>
        </div> 
                
        </>
    )
}