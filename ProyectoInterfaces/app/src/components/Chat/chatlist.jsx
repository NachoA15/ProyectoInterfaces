import React, { useEffect, useState } from 'react';
import '../../assets/css/chatList.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReactSession } from "react-client-session";

export default function ChatList(){

    const [anuncios, setAnuncios] = useState([]);

    let myId = ReactSession.get("id");

    const fetchData = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:3001/getChats',{
                params: {
                    id: myId
                },
            });
            setAnuncios(response.data);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
            <div class="wrapper">

                <div class="right">
                <div class="right-container">
                    <div class="right-card">
                    <div class="right-card-container">
                        <div class="right-card-header">
                        <span class="header-bold">Mis Chats</span>
                        </div>
                        <div class="right-card-body">
                        <div class="right-card-body-container">
                            {anuncios.map((anuncio, key) => {
                                console.log(anuncio[0])
                                return(
                            <a href={"/chat/" + anuncio[0].id}>
                            <div class="card" key={key}>
                            <div class="profile">
                                <div class="profile-info">
                                <span class="name-font">{anuncio[0].nombre + " " + anuncio[0].precio + "€"} </span>
                                <span class="job-font">{anuncio[0].vendedor}</span>
                                </div>
                            </div>
                            </div>
                            </a>
                                )
                            })}
                            
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
