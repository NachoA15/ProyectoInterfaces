import React from 'react';
import appServices from '../../services/appServices';
import world from '../../assets/images/world.png'

export default function ProfileView({usuarioPerfil, usuarioRegistrado, setEditando}) {

    return(
        <>      
        <div className='profile-placement'>
            <div className="row py-5 px-4"> 
                <div className="col mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden"> 
                        <div className="px-4 pt-0 pb-8 cover"> 
                            <div className="media align-items-end profile-head">
                                <div className='row bgblue'>
                                    <div className="col-2 profile mr-3">
                                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="240" className="rounded mb-2 img-thumbnail"/>
                                        {usuarioRegistrado === usuarioPerfil.username && <button className="btn btn-outline-dark btn-sm btn-block" onClick={() => setEditando(true)}>Edit profile</button>}
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
                                <p className="font-italic mb-0 descripcion">Aficionado a la música</p> 
                                <p className="font-italic mb-0 descripcion">Estudié en el conservatorio</p> 
                                <p className="font-italic mb-0 descripcion">Fotógrafo</p> 
                                <p className="font-italic mb-0 descripcion">Ingeniero de software</p> 
                            </div> 
                        </div> 
                        
                        <div className="py-4 px-4"> 
                            <div className="d-flex align-items-center justify-content-between mb-3"> 
                                <h5 className="mb-0">Recent photos</h5>
                                <a href="#" className="btn btn-link text-muted">Show all</a> 
                            </div> 
                            
                            <div className="row"> 
                                <div className="col-lg-6 mb-2 pr-lg-1">
                                    <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                                </div> 

                                <div className="col-lg-6 mb-2 pl-lg-1">
                                    <img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                                </div> 

                                <div className="col-lg-6 pr-lg-1 mb-2">
                                    <img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                                </div> 
                                
                                <div className="col-lg-6 pl-lg-1">
                                    <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/>
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