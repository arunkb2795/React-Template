import React from 'react'
import IMAGE from './javascript.png'
import SVG from './javascript.svg'
import ClickCounter from './ClickCounter'
import "./styles.css"
export default function App() {
    return (
        <>
            <h1>
                Hello World {process.env.NODE_ENV}
            </h1>
            <img src={IMAGE} alt="JS png" width="200" height="200" />
            <img src={SVG} alt="JS svg" width="200" height="200" />
            <ClickCounter />
        </>
    )
}
