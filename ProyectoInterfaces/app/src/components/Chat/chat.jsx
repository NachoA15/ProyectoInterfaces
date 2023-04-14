import React from 'react';
import '../../assets/css/chat.css'
import {TextField} from '@mui/material'

export default function Chat() {
    return(
        <>
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
                                            <small>Last seen: 2 hours ago</small>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="chat-history">
                                <ul class="m-b-0">
                                    <li class="clearfix">
                                        <div class="message-data text-right">
                                            <span class="message-data-time">10:10 AM, Today</span>
                                            
                                        </div>
                                        <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="message-data">
                                            <span class="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div class="message my-message">Are we meeting today?</div>                                    
                                    </li>                               
                                    <li class="clearfix">
                                        <div class="message-data">
                                            <span class="message-data-time">10:15 AM, Today</span>
                                        </div>
                                        <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="input-group mb-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-send"></i><TextField
                                        id="usuario"
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
            
        
        </>
    )

    
}
