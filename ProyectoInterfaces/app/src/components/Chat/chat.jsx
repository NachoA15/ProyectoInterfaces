import React, { useEffect, useState } from 'react';
import '../../assets/css/chat.css'
import {TextField} from '@mui/material'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReactSession } from "react-client-session";
import NavbarChat from './NavBarChat';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [anuncio, setAnuncio] = useState([]);
    const [rutaArchivo, setRutaArchivo] = useState([]);

    let params = useParams();
    let idProduct = params.id;
    let myId = ReactSession.get("id");
    let otroId = params.idC
    console.log(myId);

    
    const fetchData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:3001/getAnuncioById', {
                anuncio: idProduct
            });
            console.log('RESPUESTA: ' + response.data);
            setAnuncio(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        if (anuncio.length > 0) {
            console.log(anuncio);
            if(myId === otroId){
                if (myId < anuncio[0].vendedor) {
                    setRutaArchivo("" + myId+"-" + anuncio[0].vendedor+"-" + anuncio[0].idAnuncio + "");
                } else {
                    setRutaArchivo("" + anuncio[0].vendedor+"-" + myId+"-" + anuncio[0].idAnuncio + "");
                }
            }else{
                if (otroId < anuncio[0].vendedor) {
                    setRutaArchivo("" + myId+"-" + anuncio[0].vendedor+"-" + anuncio[0].idAnuncio + "");
                } else {
                    setRutaArchivo("" + anuncio[0].vendedor+"-" + otroId+"-" + anuncio[0].idAnuncio + "");
                }
            }
        }
    }, [anuncio]);

    console.log(rutaArchivo);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3001/getMessages', {
                    params: {
                        logChat: "chat" + rutaArchivo + ".txt",
                    },
                });
                setMessages(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        // Ejecutar fetchData cada 10 segundos (10000 ms)
        const intervalId = setInterval(fetchData, 1000);
    
        // Limpiar el intervalo cuando el componente se desmonte o cuando se cambie la dependencia
        return () => {
            clearInterval(intervalId);
        };
    }, [rutaArchivo]);
    

    return(
        <>

        <div id='chatNav'>
            <NavbarChat />
        </div>

        <div id='sentMessageForm'>
            <form onSubmit={(e) => {
                const message = document.getElementById('mensaje').value;
                axios.post("http://127.0.0.1:3001/saveChat", {
                    message: message,
                    user: myId,
                    logChat: "chat" + rutaArchivo+".txt"
                })
            }}>

            
        
        <div class="container-fluid">
            <div class="row clearfix">
            <div class="col-md-2">
                <div class="chat-button">
                     <a href="/products" class="btn btn-dark" style={{height: 40}}>Volver</a>
                </div>
                </div>
                    <div class="col-md-7">
                        <div class="chat">
                            <div class="chat-header clearfix" aria-hidden="true">
                                <div class="row">
                                    <div class="col-md-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info" aria-hidden="true">
                                            
                                        </a>
                                        <div class="chat-about" aria-hidden="true">
                                            {() => {
                                                return(<h6 class="m-b-0">{anuncio[0].nombre +" "+ anuncio[0].precio +"€" + " - " + anuncio[0].username}</h6>)
                                            }}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="chat-history">
                                <ul class="m-b-0"  tabindex="0">
                                    {
                                        
                                            messages.map((message, key) => {
                                                if(key !== 0){
                                                if(message.startsWith(myId+":")){
                                                    return(
                                            <div key={key}>
                                            <li class="clearfix">
                                                <div class="message-data text-right">
                                                    
                                                </div>
                                                <div class="message other-message float-right"> {message.replace(myId+":","")} </div>
                                            </li>
                                            </div>
                                                    )
                                                }else{
                                                    return(
                                                        <div key={key}> 
                                                        <li class="clearfix">
                                                        <div class="message-data">
                                                        </div>
                                                        <div class="message my-message">{message.replace(otroId+":", "")}</div>                                    
                                                    </li> 
                                                    </div>
                                                    )
                                                }
                                            }
                                        })
                                        }
                                    
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="input-group mb-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-send" ></i><TextField 
                                        id="mensaje"
                                        name='nombre de usuario'
                                        variant="standard"
                                        size="small" 
                                        /> </span>
                                    </div>
                                                                     
                                </div>
                            </div>
                            <div class="button-container">
                                <button class="button-anunciochat">Enviar Mensaje</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                </form>
            </div>
        
        </>
    )

    
}
