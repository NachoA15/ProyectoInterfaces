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

const appServices = {moveToMainPage, moveToSignUp, moveToLogin, moveToProfile}

export default appServices