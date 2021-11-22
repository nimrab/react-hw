import React from 'react'
import css from './Header.module.css'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={css.nav_links_main}>

            <section className={css.link_section}>


                <NavLink to={PATH.PRE_JUNIOR} activeClassName={css.active} className={css.junior_link}>
                    <div className={css.junior_link_box}>
                        Pre-Junior
                    </div>
                </NavLink>


                <NavLink to={PATH.JUNIOR} activeClassName={css.active} className={css.junior_link}>
                    <div className={css.junior_link_box}>
                        Junior
                    </div>
                </NavLink>


                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={css.active} className={css.junior_link}>
                    <div className={css.junior_link_box}>
                        JuniorPlus
                    </div>
                </NavLink>

                <div className={css.button}>Slide me</div>
            </section>


        </div>
    )
}

