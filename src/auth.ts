export function getIsUseLoggedIn() {
    return Boolean(window.isUserLoggedIn)
}

export function setUserLoggedIn() {
    window.isUserLoggedIn = true;
}