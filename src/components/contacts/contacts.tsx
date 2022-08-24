// @ts-ignore
import style from "./contacts.module.css";
import React from "react";
// @ts-ignore
import portrait from './aal_portrait.jpg'
// @ts-ignore
import toTop from './toTop.jpg'

interface IInfo {
    title: string,
    children: any
}

function Info (props: IInfo) {
    return (
        <div className={style.info_box}>
            <h3 className={style.info_title}>[{props.title}]</h3>
            {props.children}
        </div>
    )
}

function Contacts () {
    return (
        <section className={style.main} id='КОНТАКТЫ'>
            <div className={style.img_box}>
                <img className={style.image} src={portrait}/>
            </div>
            <div className={style.contacts_container}>
                <h2 className={style.title}>КОНТАКТЫ</h2>
                <div className={style.info_container}>
                    <Info title='СВЯЗЬ'>
                        <a href="tel:+7-(901)-405-50-05" className={style.link_phone}>+7 (901) 405-50-05</a>
                        <p className={style.tel}>+7 (901) 405-50-05</p>
                        <p>advokatlebedev@yandex.ru</p>
                    </Info>
                    <Info title='ОФИС'>
                        <p>
                            Москва,<br/>
                            ул. Арбат, 54/2,<br/>
                            строение 1<br/>
                        </p>
                    </Info>
                    <Info title='ГРАФИК РАБОТЫ'>
                        <p>
                            09:00 - 18:00<br/>
                            Будние дни<br/>
                        </p>
                    </Info>
                </div>
            </div>
            <div className={style.to_top} onClick={() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            }}>
                <img src={toTop} className={style.to_top_img}/>
            </div>
        </section>
    )
}
export default Contacts