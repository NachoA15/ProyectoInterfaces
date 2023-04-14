import React from 'react'
import NavbarIntroPage from './NavbarIntroPage'
import '../../assets/css/IntroPage.css'
import appServices from '../../services/appServices';
import { useState } from 'react';

export default function IntroPage() {

    return (
        <>
        <div id='navbarLocation'>
            <NavbarIntroPage />
        </div>
        <div id='inicio'>
            <div className='textLeft'>
                <h1>Un espacio para músicos</h1>
                <br/>
                <p>Desde comprar el material que buscas o vender el tuyo propio 
                    hasta interactuar con el resto de usuarios. Comparte tus gustos, tu equipo, tu propia música... 
                    ¡Lo que quieras!</p>
                <div id='intro-buttons-section'>
                    <button className='button-intro' onClick={() => appServices.moveToSignUp()}>Regístrate</button>
                    <br/>
                    <br/>
                    <button className='button-intro' onClick={() => appServices.moveToLogin()}>Login</button>
                </div>
            </div>
        </div>
        <div id='anuncios'>
            <div className='textRight'>
                <h1>Amplía tu arsenal</h1>
                <br/>
                <p>Busca y compra equipo que te interese de otros usuarios a través de los anuncios.
                    ¡Tu también puedes vender el tuyo!</p>
                <br/>
                <p>Busca según diferentes filtros y añade los anuncios que te llamen la atención a 
                    una lista de seguimiento. Ya sabes, para tenerlos a mano...
                </p>
            </div>
        </div>
        <div id='interactua'>
            <div className='textLeft'>
                <h1>Interactúa con otros músicos</h1>
                <br/>
                <p>Comenta en los anuncios y participa en discusiones sobre instrumentos, equipo, 
                    experiencias personales... </p>
                <p>Personaliza tu perfil con cualquier cosa sobre ti que quieras
                    compartir con el resto. También puedes visitar el perfil de otros usuarios.</p>
                <p>¡Conecta con gente que comparte tu misma pasión!</p>
            </div>
        </div>
        <div id='sobre-nosotros'>
            <div className='textRight'>
                <h1>Sobre nosotros</h1>
                <br/>
                <p>Somos un equipo de estudiantes de Ingeniería de Software de la Universidad de Málaga
                    a los que, como tú, nos apasiona el mundo de la música.</p>
            </div>
        </div>
        </>
    )
}