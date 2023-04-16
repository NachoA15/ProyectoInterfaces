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

const appServices = {moveToMainPage, moveToSignUp, moveToLogin, moveToProfile, openChat}

export default appServices