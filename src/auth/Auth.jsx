const isAuthenticated = (user) => {
    if (user) {
        return true;
    }
    return false;
};

export default isAuthenticated;