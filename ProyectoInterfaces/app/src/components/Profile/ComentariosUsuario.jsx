import React, { useEffect, useState } from "react";
import userServices from "../../services/userServices";
import "../../assets/css/Comentarios.css"
import { TextField } from "@mui/material";
import {ReactSession} from "react-client-session";

export default function ComentariosUsuario({idUsuario}) {
    
    const [comentarios, setComentarios] = useState([]);

    const idUsuarioRegistrado = ReactSession.get("id");

    useEffect(() => {
        userServices.getComentarios(setComentarios);
    }, []);

    return(
        <>
        <div className="item-active">
            <div className="row">
                {comentarios.map((comentario) => {
                    return(
                        <div className="placement-comentarios">
                            <ul id="comments-list" className="comments-list">
                                <li>
                                    <div className="comment-main-level">
                                        
                                        {/**Avatar 
                                         * 
                                        <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" sizes="small"/></div>
                                        */}
                                        {/**Contenedor del Comentario */}  
                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6 className="comment-name by-author">{comentario.idAutor}</h6>
                                                <span>{comentario.date.toString().substring(0,10)}</span>
                                                <i className="fa fa-heart"></i>
                                            </div>
                                            <div className="comment-content">
                                                {comentario.text}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
                
                <div id="addCommentForm">
                    <form onSubmit={(e) => {
                        const autor = idUsuarioRegistrado;
                        const fecha_publicacion = new Date();
                        const texto = document.getElementById('contenido').value;

                        if(texto !== ''){
                            e.preventDefault();
                            const comentario = [autor, fecha_publicacion, texto];
                            userServices.addComment(comentario);
                        }
                    }}>
    
                        <br/>
                        <h5>AÑADIR COMENTARIO</h5>
                        <div>
                            <TextField
                                id="contenido"
                                label="Añade un comentario..."
                                multiline
                                fullWidth
                            />
                        </div>
                        <br/>
                        <div className='container' style={{ maxWidth: 150 }}>
                            <button type="submit" className="btn btn-outline-primary">Confirmar</button>
                        </div>
                    </form>
                        
                </div>
            </div>
        </div>
        </>
    )
}