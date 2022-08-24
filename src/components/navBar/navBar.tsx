import React from "react";
// @ts-ignore
import style from './navBar.module.css'
import tg_icon from './../../services/icons/tg_icon.png'
import wa_icon from './../../services/icons/wa_icon.png'
import call_icon from './../../services/icons/call_icon.png'
import {navBarArr} from "../../services/constants";

interface ITitle {
    name: string,
    to: string
}

interface IIcon {
    link: string,
    img: string
}

function Title (props: ITitle) {
    return (
        <a href={props.to} className={style.title}>{props.name}</a>
    )
}
function Icon (props: IIcon) {
    return (
        <a href={props.link} className={style.link}>
            <img src={props.img} className={style.img}/>
        </a>
    )
}

export function NavBar() {
    return (
        <section className={style.main}>
            <h2 className={style.initials}>аал</h2>
            <div className={style.title_container}>
                {
                    navBarArr.map((elem: ITitle, index: number) => (
                        <Title name={elem.name} key={index} to={elem.to}/>
                    ))
                }
            </div>
            <div className={style.link_container}>
                <Icon img={tg_icon} link='https://t.me/Laa823'/>
                <Icon img={call_icon} link='#КОНТАКТЫ'/>
                <Icon img={wa_icon} link='https://api.whatsapp.com/send/?phone=79014055005&text=Пишу%20с%20Вашего%20сайта.%20Нужна%20консультация%20адвоката.'/>
            </div>
        </section>
    )
}