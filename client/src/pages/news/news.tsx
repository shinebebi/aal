import React, {useEffect, useState, useRef} from "react";
// @ts-ignore
import style from './news.module.css'

function News () {
    const [backendData, setBackendData] = useState([{}])
    const [input, setInput] = useState()
    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data)
            }
        )
    }, [])
    return (
        <div>
            {// @ts-ignore
                (typeof backendData.users === "undefined") ? (
                    <p>Loading...</p>
                ): (
                    // @ts-ignore
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )
            }
            <input onChange={
                // @ts-ignore
                e => setInput(e.target.value)} value={input}/>
            <button onClick={() => {
                fetch(`/api`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({user: input})
                }).then(r => console.log(r.json()));
            }
            }>Send</button>
        </div>
    )
}
export default News