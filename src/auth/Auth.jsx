const isAuthenticated = () => {
    if (localStorage.getItem('userToken')) {
        return true;
    }
    return false;
};

export default isAuthenticated;