// @ts-ignore
import style from "./contacts.module.css";
import React from "react";
// @ts-ignore
import portrait from './aal_portrait.jpg'
// @ts-ignore
import toTop from './toTop.jpg'
import tg_icon from './../../services/icons/tg_icon2.png'
import wa_icon from './../../services/icons/wa_icon2.png'

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
                        <div className={style.icons}>
                            <img src={tg_icon} className={style.icon}/>
                            <img src={wa_icon} className={style.icon}/>
                        </div>
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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.655641616502!2d37.583064!3d55.747112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb6aded7bb5%3A0x78c2a55e3e220cc1!2z0YPQuy4g0JDRgNCx0LDRgiwgNTQvMiDRgdGC0YDQvtC10L3QuNC1IDEsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMTkwMDI!5e0!3m2!1sru!2str!4v1661537907474!5m2!1sru!2str"
                            width="350" height="300" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
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