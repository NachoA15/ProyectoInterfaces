import React, { useEffect, useState } from 'react';
import '../../assets/css/chat.css'
import {TextField} from '@mui/material'
import axios from 'axios';

export default function Chat() {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3001/getMessages', {
          params: {
            logChat: 'JuanjoPepe.txt',
          },
        });
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Ejecutar fetchData cada 10 segundos (10000 ms)
    const intervalId = setInterval(fetchData, 7000);

    // Limpiar el intervalo cuando el componente se desmonte o cuando se cambie la dependencia
    return () => {
      clearInterval(intervalId);
    };
  }, []);
    

    return(
        <>

        <div id='sentMessageForm'>
            <form onSubmit={(e) => {
                const message = document.getElementById('mensaje').value;
                axios.post("http://127.0.0.1:3001/saveChat", {
                    message: message,
                    user: "Juanjo",
                    logChat: "JuanjoPepe.txt"
                }).then(res => {
                    console.log(res.data);
                })
            }}>

            
        
        <div class="container-fluid">
            <div class="row clearfix">
            <div class="col-md-1">
                <div class="chat-button">
                     <a href="/products" class="btn btn-dark" style={{height: 40}}>Volver</a>
                </div>
                </div>
                    <div class="col-md-7">
                        <div class="chat">
                            <div class="chat-header clearfix">
                                <div class="row">
                                    <div class="col-md-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                            
                                        </a>
                                        <div class="chat-about">
                                            <h6 class="m-b-0">Aiden Chavez</h6>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="chat-history">
                                <ul class="m-b-0">
                                    {messages.map((message, key) => {
                                        if(message.startsWith("Juanjo:")){
                                            return(
                                    <li class="clearfix">
                                        <div class="message-data text-right">
                                            
                                        </div>
                                        <div class="message other-message float-right"> {message.replace("Juanjo:","")} </div>
                                    </li>
                                            )
                                        }else{
                                            return(
                                                <li class="clearfix">
                                                <div class="message-data">
                                                </div>
                                                <div class="message my-message">{message.replace("Pepe:", "")}</div>                                    
                                            </li> 
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="input-group mb-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-send"></i><TextField
                                        id="mensaje"
                                        name='nombre de usuario'
                                        
                                        variant="standard"
                                        size="small" 
                                        /> </span>
                                    </div>
                                                                     
                                </div>
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
