import React from "react";
import ampWithGuitar from "../../assets/images/amp with guitar.png";

export default function MyProductsInfo() {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div id="placement-info">
                    <h2 tabIndex="0"><b>No tienes ningún anuncio subido</b></h2>
                    <div className="item-active">
                        <div className="row">
                            <div className="col-1"/>
                            <div className="col">
                                <br/>
                                <p tabIndex="0">¡Parece que no tienes ningún anuncio!</p>
                                <br/>
                                <p tabIndex="0">No te preocupes, no es necesario tener alguno para poder usar nuestra aplicación.</p>
                                <br/>
                                <p tabIndex="0">Cuando tengas, aquí podrás visualizar todos tus anuncios que estén activos
                                (es decir, que no se han eliminado).</p>
                                <br/>
                                <p tabIndex="0">El borrado de los anuncios es permanente y no se puede deshacer, por lo que si eliminas
                                uno de tus anuncios también desaparecerá de aquí.</p>
                            </div>
                            <div className="col-1"/>
                            <div className="col">
                                <img id="infoimg" src={ampWithGuitar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}