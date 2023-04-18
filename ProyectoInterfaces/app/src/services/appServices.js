const moveToMainPage = () => {
    window.location.href = "/"
}

const moveToSignUp = () => {
    window.location.href = "/signUp"
}

const moveToLogin = () => {
    window.location.href = "/login"
}

const moveToProfile = (username) => {
    window.location.href = "/profile/" + username
}

const openChat = (idAnuncio) => {
    window.location.href = "/chat/" + idAnuncio
}

const moveToProducts = () => {
    window.location.href = "/products"
}

const appServices = {moveToMainPage, moveToSignUp, moveToLogin, moveToProfile, openChat, moveToProducts}

export default appServices