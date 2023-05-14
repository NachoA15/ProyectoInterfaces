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

const openChat = (idAnuncio, idComprador) => {
    window.location.href = "/chat/" + idComprador + "/" + idAnuncio
}

const moveToProducts = () => {
    window.location.href = "/products"
}

const moveToProductPage = (idAnuncio) => {
    window.location.href = "/product/" + idAnuncio;
}

const appServices = {moveToMainPage, moveToSignUp, moveToLogin, moveToProfile, openChat, moveToProducts, moveToProductPage}

export default appServices