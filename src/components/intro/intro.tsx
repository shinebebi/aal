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
                    <p>Опыт работы более 15 лет</p>
                    <p>Конфиденциальность</p>
                    <p>Застрахована ответственность на 1 млн.руб</p>
                </div>
            </div>
            <div className={style.point}>
                <div className={style.icon_box}>
                    <img src={benefits_icon} className={style.icon}/>
                </div>
                <h3 className={style.title}>Мои преимущества</h3>
                <div className={style.text_box}>
                    <p>Я имею практический опыт работы в
                        следственных подразделениях
                    </p>
                    <p>Опыт работы государственным обвинителем</p>
                    <p>Успешный опыт представления
                        интересов и защиты Доверителей на
                        предварительном следствии в суде.</p>
                </div>
            </div>
            <div className={style.point}>
                <div className={style.icon_box}>
                    <img src={practice_icon} className={style.icon}/>
                </div>
                <h3 className={style.title}>Моя практика</h3>
                <div className={style.text_box}>
                    <p>Уголовное дело возвращено прокурору</p>
                    <p>Отменен запрет на въезд в РФ иностранному гражданину</p>
                    <p>Замена реального тюремного срока на условное осуждение</p>
                    <p>Спор по договору займа</p>
                </div>
            </div>
        </section>
    )
}