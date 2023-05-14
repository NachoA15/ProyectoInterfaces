import React from 'react'
import NavbarIntroPage from './NavbarIntroPage'
import '../../assets/css/IntroPage.css'
import appServices from '../../services/appServices';

export default function IntroPage() {

    return (
        <>
        <div id='navbarLocation'>
            <NavbarIntroPage />
        </div>
        <div>
            <div id='inicio'>
                <div className='textLeft'>
                    <h1 tabIndex="0">Un espacio para músicos</h1>
                    <p className='intro-text' tabIndex="0">Desde comprar el material que buscas o vender el tuyo propio 
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
                    <h1 tabIndex="0">Amplía tu arsenal</h1>
                    <br/>
                    <p className='intro-text' tabIndex="0">Busca y compra equipo que te interese de otros usuarios a través de los anuncios.
                        ¡Tu también puedes vender el tuyo!</p>
                    <br/>
                    <p className='intro-text' tabIndex="0">Busca según diferentes filtros y añade los anuncios que te llamen la atención a 
                        una lista de seguimiento. Ya sabes, para tenerlos a mano...
                    </p>
                </div>
            </div>
            <div id='interactua'>
                <div className='textLeft'>
                    <h1 tabIndex="0">Interactúa con otros músicos</h1>
                    <br/>
                    <p className='intro-text' tabIndex="0">Valora a otros usuarios y visita los perfiles de otras personas.</p>
                    <p className='intro-text' tabIndex="0">Personaliza tu perfil con cualquier cosa sobre ti que quieras
                        compartir con el resto.</p>
                    <p className='intro-text' tabIndex="0">¡Conecta con gente que comparte tu misma pasión!</p>
                </div>
            </div>
            <div id='sobre-nosotros'>
                <div className='textRight'>
                    <h1 tabIndex="0">Sobre nosotros</h1>
                    <br/>
                    <p className='intro-text' tabIndex="0">Somos un equipo de estudiantes de Ingeniería de Software de la Universidad de Málaga
                        a los que, como tú, nos apasiona el mundo de la música.</p>
                </div>
            </div>
        </div>
        </>
    )
}