import React from "react";
// @ts-ignore
import style from './intro.module.css'
// @ts-ignore
import question_icon from './question_icon.png'
// @ts-ignore
import benefits_icon from './benefits_icon.png'
// @ts-ignore
import practice_icon from './practice_icon.png'

export function Intro () {
    return (
        <section className={style.intro_container} id='О_СЕБЕ'>
            <div className={style.point}>
                <div className={style.icon_box}>
                    <img src={question_icon} className={style.icon}/>
                </div>
                <h3 className={style.title}>Почему выбирают именно меня</h3>
                <div className={style.text_box}>
                    <p>Опыт работы более 20 лет</p>
                    <p>Конфиденциальность</p>
                    <p>Гарантия на выполнение поручений</p>
                </div>
            </div>
            <div className={style.point}>
                <div className={style.icon_box}>
                    <img src={benefits_icon} className={style.icon}/>
                </div>
                <h3 className={style.title}>Мои преимущества</h3>
                <div className={style.text_box}>
                    <p>Практический опыт работы государственным обвинителем и в
                        следственных подразделениях
                    </p>
                    <p>Оперативность</p>
                    <p>Успешный опыт представления
                        интересов и защиты Доверителей по гражданским и уголовным делам.</p>
                </div>
            </div>
            <div className={style.point}>
                <div className={style.icon_box}>
                    <img src={practice_icon} className={style.icon}/>
                </div>
                <h3 className={style.title}>Сферы работы</h3>
                <div className={style.text_box}>
                    <p>Уголовно правовая</p>
                    <p>Гражданская правовая</p>
                    <p>Адменистративно-правовая</p>
                    <p>Налоговое право</p>
                </div>
            </div>
        </section>
    )
}