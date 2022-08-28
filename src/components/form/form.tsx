import React from "react";
// @ts-ignore
import style from './form.module.css'

export function Form () {
    return (
        <section className={style.main}>
            <h2 className={style.title}>СВЯЖИТЕСЬ СО МНОЙ</h2>
            <form className={style.form_container}>
                <input placeholder='Ваше имя' className={style.input}/>
                <input placeholder='Номер телефона' className={style.input}/>
                <button type='submit' className={style.button}>
                    <p style={{margin: 'auto'}}>Отпраить</p>
                </button>
            </form>
            <p className={style.text}>Если Вы хотите назначить встречу или у Вас возникли вопросы, то позвоните или напишите. Это бесплатно.</p>
        </section>
    )
}