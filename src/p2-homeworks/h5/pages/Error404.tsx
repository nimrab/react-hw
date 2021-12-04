import React from 'react'
import {PATH} from "../Routes";
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <NavLink to={PATH.DEFAULT}>Main Page</NavLink>
        </div>
    )
}

export default Error404
