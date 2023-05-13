import React, { useEffect, useState } from "react";
import userServices from "../../services/userServices";
import "../../assets/css/Comentarios.css"
import { TextField } from "@mui/material";
import {ReactSession} from "react-client-session";

export default function ComentariosUsuario({usuario}) {
    
    const idUsuarioRegistrado = ReactSession.get("id");

    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        userServices.getComentariosByUser(usuario.id, setComentarios);
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
                                    <div className="comment-box">
                                        <div className="comment-head">
                                            <h6 className="comment-name by-author">{comentario.username}</h6>
                                            <span>{comentario.date.toString().substring(0,10)}</span>
                                        </div>
                                        <div class="comment-content">
                                            {comentario.text}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
                
                {usuario.id !== idUsuarioRegistrado &&
                    <div id="addCommentForm">
                        <form onSubmit={(e) => {
                            const idUsuario = usuario.id;
                            const autor = idUsuarioRegistrado;
                            const fecha_publicacion = new Date();
                            const texto = document.getElementById('contenido').value;
                            const username = usuario.username;

                            if(texto !== ''){
                                e.preventDefault();
                                const comentario = [idUsuario, autor, fecha_publicacion, texto, username];
                                userServices.addComment(comentario);
                            }
                        }}>
        
                            <br/>
                            <div style={{width: 800}}>
                                <TextField
                                    id="contenido"
                                    label="Añade un comentario..."
                                    multiline
                                    fullWidth
                                />
                            </div>
                            <br/>
                            <div className='comment-container' style={{ maxWidth: 150, alignItems: "left"}}>
                                <button type="submit" className="btn btn-outline-primary">Confirmar</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
        </>
    )
}