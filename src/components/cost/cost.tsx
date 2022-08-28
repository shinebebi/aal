import React from "react";
// @ts-ignore
import style from './cost.module.css'

function Service (props: any) {
    return (
        <div className={style.service_box}>
            <div className={style.service_title_main}>
                <h3 className={style.service_title}>{props.title}</h3>
            </div>
            <div className={style.cost_box}>
                <p>от {props.cost}р.</p>
            </div>
            <button className={style.btn}>
                <p>выбрать</p>
            </button>
        </div>
    )
}

export function Cost () {
    return (
        <section className={style.main_container} id='СТОИМОСТЬ'>
            <h2 className={style.title}>стоимость услуг:</h2>
            <div className={style.main}>
                <Service title='КОНСУЛЬТАЦИЯ' cost={3500}/>
                <Service title='СОСТАВЛЕНИЕ ДОКУМЕНТОВ' cost={4500}/>
                <Service title='ПРЕДСТАВЛЕНИЕ ИНТЕРЕСОВ В СУДЕ' cost={6000}/>
            </div>
        </section>
    )
}