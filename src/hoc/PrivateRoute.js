import React, { Component } from "react";
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";

const privateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                rest.isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                );
            }}
        >

        </Route>
    )
};