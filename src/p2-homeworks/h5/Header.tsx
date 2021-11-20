import React from 'react'
import css from './Header.module.css'

export const Header = () => {
    return (
        <div className={css.nav_links_main}>

            <section className={css.link_section}>

                <div className={css.junior_link}>Link 1</div>
                <div className={css.junior_link}>Link 2</div>
                <div className={css.junior_link}>Link 3</div>
                <div className={css.button}>Slide me</div>
            </section>




        </div>
    )
}

