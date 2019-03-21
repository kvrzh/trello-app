import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const isAuth = token && token.length > 10 && id && id.length > 0;
    return (
        <Route
            {...rest}
            render={props => (
                isAuth
                    ? <Component {...props} />
                    : <Redirect to="/login"/>
            )}
        />
    )
};

export default PrivateRoute;