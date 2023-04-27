import React, { useEffect, useState } from 'react';
import '../../assets/css/chatList.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReactSession } from "react-client-session";

export default function ChatList(){

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
                            <div class="card">
                            <div class="profile">
                                <div>
                                <img
                                    src="https://i.postimg.cc/PJMXbH16/Icon.png
                                    "
                                    alt="profile"
                                />
                                </div>
                                <div class="profile-info">
                                <span class="name-font">Neelesh Chaudhary</span>
                                <span class="job-font">UI / UX Designer</span>
                                </div>
                            </div>
                            <div class="icons">
                                <div>
                                <img
                                    src="https://i.postimg.cc/Jnv6TH50/Message.png"
                                    alt="message"
                                />
                                </div>
                                <div>
                                <img
                                    src="https://i.postimg.cc/9XwND1c7/Phone.png"
                                    alt="phone"
                                />
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="profile">
                                <div>
                                <img
                                    src="https://i.postimg.cc/yN5tGGV7/Icon-1.png
                                    "
                                    alt="profile"
                                />
                                </div>
                                <div class="profile-info">
                                <span class="name-font">Guy Fisher</span>
                                <span class="job-font">Business Analyst</span>
                                </div>
                            </div>
                            <div class="icons">
                                <div>
                                <img
                                    src="https://i.postimg.cc/Jnv6TH50/Message.png"
                                    alt="message"
                                />
                                </div>
                                <div>
                                <img
                                    src="https://i.postimg.cc/9XwND1c7/Phone.png"
                                    alt="phone"
                                />
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="profile">
                                <div>
                                <img
                                    src="https://i.postimg.cc/1tGBK7XC/Icon-2.png"
                                    alt="profile"
                                />
                                </div>
                                <div class="profile-info">
                                <span class="name-font">Diane Hawkins</span>
                                <span class="job-font">Blockchain Expert</span>
                                </div>
                            </div>
                            <div class="icons">
                                <div>
                                <img
                                    src="https://i.postimg.cc/Jnv6TH50/Message.png"
                                    alt="message"
                                />
                                </div>
                                <div>
                                <img
                                    src="https://i.postimg.cc/9XwND1c7/Phone.png"
                                    alt="phone"
                                />
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="profile">
                                <div>
                                <img
                                    src="https://i.postimg.cc/CKDsFrGh/Icon-3.png
                                    "
                                    alt="profile"
                                />
                                </div>
                                <div class="profile-info">
                                <span class="name-font">Dustin Mccoy</span>
                                <span class="job-font">Product Designer</span>
                                </div>
                            </div>
                            <div class="icons">
                                <div>
                                <img
                                    src="https://i.postimg.cc/Jnv6TH50/Message.png"
                                    alt="message"
                                />
                                </div>
                                <div>
                                <img
                                    src="https://i.postimg.cc/9XwND1c7/Phone.png"
                                    alt="phone"
                                />
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="profile">
                                <div>
                                <img
                                    src="https://i.postimg.cc/K83nNpsP/Icon-4.png
                                    "
                                    alt="profile"
                                />
                                </div>
                                <div class="profile-info">
                                <span class="name-font">Philip Cooper</span>
                                <span class="job-font">Quality Assurance</span>
                                </div>
                            </div>
                            <div class="icons">
                                <div>
                                <img
                                    src="https://i.postimg.cc/Jnv6TH50/Message.png"
                                    alt="message"
                                />
                                </div>
                                <div>
                                <img
                                    src="https://i.postimg.cc/9XwND1c7/Phone.png"
                                    alt="phone"
                                />
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="profile">
                                <div>
                                <img
                                    src="https://i.postimg.cc/JnYnSMsG/Icon-5.png
                                    "
                                    alt="profile"
                                />
                                </div>
                                <div class="profile-info">
                                <span class="name-font">Scarlett Murphy</span>
                                <span class="job-font">Researcher</span>
                                </div>
                            </div>
                            <div class="icons">
                                <div>
                                <img
                                    src="https://i.postimg.cc/Jnv6TH50/Message.png"
                                    alt="message"
                                />
                                </div>
                                <div>
                                <img
                                    src="https://i.postimg.cc/9XwND1c7/Phone.png"
                                    alt="phone"
                                />
                                </div>
                            </div>
                            </div>
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
