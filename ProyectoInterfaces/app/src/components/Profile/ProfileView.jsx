import React from 'react';
import world from '../../assets/images/world.png'
import AnunciosUsuario from './AnunciosUsuario';

export default function ProfileView({usuarioPerfil, usuarioRegistrado, setEditando, idUsuarioRegistrado}) {

console.log(usuarioRegistrado)

    return(
        <>      
        <div className='profile-placement full-screen'>
            <div className="row py-5 px-4"> 
                <div className="col mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden"> 
                        <div className="px-4 pt-0 pb-8 cover"> 
                            <div className="media align-items-end profile-head">
                                <div className='row bgblue'>
                                    <div className="col-2 profile mr-3">
                                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="240" className="rounded mb-2 img-thumbnail"/>
                                        {usuarioRegistrado === usuarioPerfil.username && <button className="btn btn-outline-dark btn-sm btn-block" onClick={() => setEditando(true)}>Editar perfil</button>}
                                    </div> 
                                    
                                    <div className="col media-body mb-5 text-white">
                                        <div>
                                            <h4 className="mt-0 mb-0">{usuarioPerfil.username}</h4> 
                                            <p className="small mb-4 location"><img src={world} alt='' width={20}/> &nbsp;{usuarioPerfil.localizacion}</p> 
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        
                        <div className="bg-light p-4 d-flex justify-content-end text-center"> 
                            <ul className="list-inline mb-0"> 
                                <li className="list-inline-item"> 
                                    <h5 className="font-weight-bold mb-0 d-block">5</h5>
                                    <small className="text-muted">Valoración</small> 
                                </li> 
                            </ul> 
                        </div> 
                        
                        <div className="px-4 py-3"> 
                            <h5 className="mb-0">Sobre mí</h5> 
                            <div className="p-4 rounded shadow-sm bg-light">
                                {usuarioPerfil.descripcion !== null?
                                    <p className="font-italic mb-0 descripcion">{usuarioPerfil.descripcion}</p> 
                                    :
                                    usuarioPerfil.username === usuarioRegistrado?
                                    <p className="font-italic mb-0 descripcion">¡<a id='to-editar' onClick={() => setEditando(true)}>Edita el perfil</a> y añade una descripción!</p> 
                                    :
                                    <></>
                                } 
                            </div> 
                        </div> 
                        
                        <div className="py-4 px-4"> 
                            <h5 className="mb-0">Anuncios publicados</h5> 
                            <div className="p-4 rounded shadow-sm bg-light">
                                {usuarioPerfil.id !== undefined && <AnunciosUsuario idUsuario={usuarioPerfil.id} idUsuarioRegistrado={idUsuarioRegistrado}/>}
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}
