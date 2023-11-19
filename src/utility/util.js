const util = {
    authHandler: ({ isAuth }) => {
        if ( !isAuth ) {
            window.location.pathname = 'login';
        }
    }
}

export default util;