import React from "react";
// @ts-ignore
import style from './colleagues.module.css'
import lawyer1_img from './lawyer1.png'
import lawyer2_img from './lawyer2.jpeg'
import {lawyer1Text, lawyer2Text} from "../../services/constants";

interface ILawyer {
    name: string,
    text: string,
    img: string
}
function Lawyer (props: ILawyer) {
    return (
        <div className={style.lawyer_box}>
            <div className={style.img_box}>
                <img src={props.img} className={style.img}/>
            </div>
            <h3 className={style.name}>{props.name}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export function Colleagues () {
    return (
        <section className={style.colleagues_container}>
            <h2 className={style.title}>коллегия адвокатов</h2>
            <div className={style.lawyer_container}>
                <Lawyer name='Мадина Гикаева' text={lawyer1Text} img={lawyer1_img}/>
                <Lawyer name='Константин Бариленко' text={lawyer2Text} img={lawyer2_img}/>
            </div>
        </section>
    )
}