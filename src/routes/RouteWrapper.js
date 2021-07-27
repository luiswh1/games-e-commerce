import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const user = useSelector(store => store.user);
    let logado = false;

    if (user) {
        logado = true;
    }

    if (!logado && isPrivate) {
        return <Redirect to="/login" />
    }

    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    )
}