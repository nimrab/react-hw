import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import {Route, Switch, Redirect} from "react-router-dom";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    DEFAULT: '/react-hw',
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            <Switch>
                <Route path={PATH.DEFAULT} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} exact component={PreJunior}/>
                <Route path={PATH.JUNIOR} exact component={PreJunior}/>
                <Route path={PATH.JUNIOR_PLUS} exact component={PreJunior}/>
            </Switch>


            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/
            }


            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/
            }
            {/*<Route render={() => <Error404/>}/>*/
            }

        </div>
    )
}

export default Routes
