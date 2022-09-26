import React from "react";
// @ts-ignore
import style from './header.module.css'
// @ts-ignore
import court_img from './court_img.png'
// @ts-ignore
import logo_img from './logo_aal.png'

export function Header () {
    return (
        <section className={style.picture}>
            <div className={style.tagline_container}>
                <div className={style.logo_container}>
                    <img src={logo_img} className={style.logo}/>
                </div>
                <p className={style.tagline}>На страже ваших прав</p>
            </div>
            <img src={court_img} className={style.picture_img}/>
        </section>
    )
}