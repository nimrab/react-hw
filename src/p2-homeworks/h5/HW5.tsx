import React from 'react'
import Routes from "./Routes";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Header} from "./Header";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <BrowserRouter>

                <Header/>

                <Routes/>

            </BrowserRouter>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
