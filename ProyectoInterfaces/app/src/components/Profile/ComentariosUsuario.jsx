import React, { useEffect, useState } from "react";
import userServices from "../../services/userServices";
import "../../assets/css/Comentarios.css"
import { TextField } from "@mui/material";
import {ReactSession} from "react-client-session";
import { alignProperty } from "@mui/material/styles/cssUtils";

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
                            <ul id="comments-list" class="comments-list">
                                <li>
                                    <div class="comment-box">
                                        <div class="comment-head">
                                            <h6 class="comment-name by-author">{comentario.username}</h6>
                                            <span>{comentario.date.toString().substring(0,10)}</span>
                                            <i class="fa fa-heart"></i>
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
                                />
                            </div>
                            <br/>
                            <div class='comment-container' style={{ maxWidth: 150, alignItems: "left"}}>
                                <button type="submit" class="btn btn-outline-primary">Confirmar</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
        </>
    )
}