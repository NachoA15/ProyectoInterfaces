import React from 'react';
import NavbarRegistration from './NavBarLogin';
import '../../assets/css/login.css'

export default function Login() {
    return(
        <>
        <div id='navbarLocation'>
            <NavbarRegistration />
        </div>
        <div class="my-form bg-white">
  <h1 id='loginTitle'>Accede a tu cuenta</h1>
  <form>
    <div class="mb-3 mt-4">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 mt-4">
      <label for="exampleInputPassword1" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" class="btn btn-light mt-3">Login</button>
  </form>
  <p class="mt-4">¿No tienes cuenta todavía? <a href="/signUp">¡Regístrate ahora!</a></p>
</div>

        </>
    )
}