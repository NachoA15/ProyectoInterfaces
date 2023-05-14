import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactSession } from "react-client-session";
import userServices from '../../services/userServices';
import NavBar from '../NavBar';

import ProfileView from './ProfileView';
import EditProfile from './EditProfile';
import '../../assets/css/profile.css'

export default function Profile() {

    const [usuarioPerfil, setUsuarioPerfil] = useState([]);
    const [editando, setEditando] = useState(false);

    const usuarioRegistrado = ReactSession.get("username");
    const idUsuarioRegistrado = ReactSession.get("id");

    let params = useParams();
    let username = params.username;

    useEffect(() => {
        userServices.getUsuarioByUsername(username, setUsuarioPerfil);
    }, [])

    return(
        <>
        <div className='container-fluid'>
            <NavBar ubicacion={usuarioRegistrado === username? 'Mi perfil' : ''}/>
            {!editando? <ProfileView usuarioPerfil={usuarioPerfil} usuarioRegistrado={usuarioRegistrado} setEditando={setEditando} idUsuarioRegistrado={idUsuarioRegistrado}/> : <EditProfile usuarioPerfil={usuarioPerfil} setEditando={setEditando}/>}
        </div>
        </>
    )
}