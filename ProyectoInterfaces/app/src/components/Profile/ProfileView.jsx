import React from 'react';
import world from '../../assets/images/world.png'
import AnunciosUsuario from './AnunciosUsuario';
import ComentariosUsuario from './ComentariosUsuario';

export default function ProfileView({usuarioPerfil, usuarioRegistrado, setEditando, idUsuarioRegistrado}) {

    return(
        <>      
        <div className='profile-placement'>
            <div className="row py-5 px-4"> 
                <div className="col mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden"> 
                        <div className="px-4 pt-0 pb-8 cover"> 
                            <div className="media align-items-end profile-head">
                                <div className='row bgblue'>
                                    <div className="profile mr-3 img-edit">
                                        <img id='profile-pic' src={usuarioPerfil.imagen} alt="Tu foto de perfil" className="rounded mb-2"/>
                                        {usuarioRegistrado === usuarioPerfil.username && <button className="btn btn-outline-dark btn-sm btn-block" onClick={() => setEditando(true)} style={{width: 200}}>Editar perfil</button>}
                                    </div> 
                                    <div className="col mb-5 text-white username">
                                        <div>
                                            <h4 className="mt-0 mb-0" tabIndex="0">{usuarioPerfil.username}</h4> 
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        
                        <div className="bg-light p-4 d-flex justify-content-end text-center"> 
                            <br/>
                            <br/>
                        </div> 
                        
                        { (usuarioPerfil.nombre !== null || usuarioPerfil.correo != null || usuarioPerfil.telefono !== null) &&
                            <div className="px-4 py-3"> 
                                <h5 className="mb-0" tabIndex="0">Información personal</h5> 
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p aria-label='Localización' className="font-italic mb-0  descripcion" tabIndex="0"><img src={world} alt='' width={20}/> &nbsp;{usuarioPerfil.localizacion}</p> 
                                    {usuarioPerfil.nombre !== null && <p className="font-italic mb-0 descripcion" tabIndex={0}>Nombre: {usuarioPerfil.nombre}</p>}
                                    {usuarioPerfil.correo !== null && <p className="font-italic mb-0 descripcion" tabIndex={0}>Correo: {usuarioPerfil.correo}</p>}
                                    {usuarioPerfil.telefono !== null && <p className="font-italic mb-0 descripcion" tabIndex={0}>Teléfono: {usuarioPerfil.telefono}</p>}
                                </div> 
                            </div> 
                        }

                        <div className="px-4 py-3"> 
                            <h5 className="mb-0" tabIndex="0">Sobre mí</h5> 
                            <div className="p-4 rounded shadow-sm bg-light">
                                {usuarioPerfil.descripcion !== null?
                                    <p className="font-italic mb-0 descripcion" tabIndex="0">{usuarioPerfil.descripcion}</p> 
                                    :
                                    usuarioPerfil.username === usuarioRegistrado?
                                    <p className="font-italic mb-0 descripcion">¡<a id='to-editar' onClick={() => setEditando(true)} tabIndex="0">Edita el perfil</a> y añade una descripción!</p> 
                                    :
                                    <></>
                                } 
                            </div> 
                        </div> 
                        
                        <div className="py-4 px-4"> 
                            <h5 className="mb-0" tabIndex="0">Anuncios publicados</h5> 
                            <div className="p-4 rounded shadow-sm bg-light">
                                {usuarioPerfil.id !== undefined && <AnunciosUsuario idUsuario={usuarioPerfil.id} idUsuarioRegistrado={idUsuarioRegistrado}/>}
                            </div> 
                        </div> 

                        <div className='py-4 px-4'>
                            <h5 className="mb-0"> Comentarios</h5>
                            <div className='p-4 rounded shadow-sm bg-light'>
                                {usuarioPerfil.id !== undefined && <ComentariosUsuario usuario={usuarioPerfil}/>}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}
