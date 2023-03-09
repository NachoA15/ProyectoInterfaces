import React from 'react';
import NavbarIntroPage from '../IntroPage/NavbarIntroPage';

export default function Login() {
    return(
        <>
        <div id='navbarLocation'>
            <NavbarIntroPage />
        </div>
        <div id='login'>
            <h1>Accede con tu cuenta</h1>
            <form>
                <label>Email: </label> <input type='text' name='email'></input><br/>
                <label>Password: </label> <input type='password' name='password'></input><br/>
                <button>Login</button>
            </form>

            <div id='accederRegister'>
                <label>¿No tienes cuenta todavía?</label><br/>
                <a href='/signUp'>Registrate aquí</a>
            </div>
        </div>
        </>
    )
}