import React from "react";
// @ts-ignore
import style from "./steps.module.css";
// @ts-ignore
import image from './steps_img.webp'


type TStep = {
    text: string,
    number: number,
    key: number,
};

const steps = [
    'Позвоните мне и запишитесь на консультацию. \n Со мной можно также связаться с помощью электроной почты, WhatsApp, Telegram, или используя форму обратной связи размещенную на этом сайте.',
    'Мы встретимся в удобное для Вас время. На встрече мы оценим Вашу проблему, наметим пути ее разрешения и обсудим условия нашего сотрудничества.',
    'Мы заключим Соглашение об оказании юридической помощи.',
    'Я приступаю к работе по Вашему делу согласно утвержденной стратегии.'
]

function Step (props: TStep) {
    return (
        <div className={style.step_box} style={{borderBottom: props.number === 3 ? 'none' : '1px solid #151515'}}>
            <h3 className={style.number}>[0{1 + props.number}]</h3>
            <p>{props.text}</p>
        </div>
    )
}

function Steps() {
    return (
        <section className={style.main_container}>
            <div className={style.main}>
                <h2 className={style.header}>ЭТАПЫ РАБОТЫ:</h2>
                <div className={style.steps_container}>
                    {
                        steps.map((elem: string, index: number) => (
                            <Step text={elem} key={index} number={index}/>
                        ))
                    }
                </div>
            </div>
            <div className={style.img_box}>
                <img src={image} className={style.img}/>
            </div>
        </section>
    )
}
export default Steps