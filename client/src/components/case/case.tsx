import React from "react";
// @ts-ignore
import style from './case.module.css'

export interface ICase {
    icon: any,
    title: string,
    text: string
}

export function Case (props: ICase) {
    return (
        <div className={style.case_container}>
            <div className={style.icon_box}>
                <img src={props.icon} className={style.icon}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.text}>{props.text}</p>
        </div>
    )
}