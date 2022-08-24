import React from "react";
// @ts-ignore
import style from './content.module.css'

export function Content(props: any) {
    return (
        <section className={style.content_container}>
            <p className={style.text}>
                {props.text1}
            </p>
            <p className={style.text}>
                {props.text2}
            </p>
        </section>
    )
}