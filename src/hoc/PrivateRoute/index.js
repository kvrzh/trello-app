import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token');
    const isAuth = token && token.length > 10 ;
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