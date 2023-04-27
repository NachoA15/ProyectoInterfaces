import React from 'react';
import NavbarProfile from './NavbarProfile';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactSession } from "react-client-session";
import Axios from 'axios'

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
        Axios.post("http://localhost:3001/getUsuarioByUsername", {
            username: username
        }).then((u) => {
            setUsuarioPerfil(u.data[0]);
        })
    }, [])

    return(
        <>
        <NavbarProfile />
        {!editando? <ProfileView usuarioPerfil={usuarioPerfil} usuarioRegistrado={usuarioRegistrado} setEditando={setEditando} idUsuarioRegistrado={idUsuarioRegistrado}/> : <EditProfile usuarioPerfil={usuarioPerfil} setEditando={setEditando}/>}
        </>
    )
}