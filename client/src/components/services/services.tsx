import React from "react";
// @ts-ignore
import style from './services.module.css'
import {Case, ICase} from "../case/case";

interface IServices {
    arr: ICase[],
    title: string,
    id: string
}

export function Services (props: IServices) {
    return (
        <section className={style.service_container} id={props.id}>
            <h2 className={style.title}>{props.title}</h2>
            <div className={style.grid_box}>
                {
                    props.arr.map((elem: ICase, index: number) => (
                        <Case icon={elem.icon} key={index} title={elem.title} text={elem.text}/>
                    ))
                }
            </div>
        </section>
    )
}