import React, { useState } from 'react'
import kino from './kino.json'

export default function Home() {
    const [active, setActive] = useState(0)

    const handleChange = (e) => {
        setActive(active === e ? 0 : e)
    }
    return (
        <div>
            <div className="card">
                <button onClick={() => handleChange(1)}>Click</button>
                <div className={active === 1 ? "mini-card" : "none"}>
                    <h1>HEllO</h1>
                </div>
            </div>
            <div className="card">
                <button onClick={() => handleChange(2)}>Click</button>
                <div className={active === 2 ? "mini-card" : "none"}>
                    <h1>HEllO</h1>
                </div>
            </div>
            <div className="card">
                <button onClick={() => handleChange(3)}>Click</button>
                <div className={active === 3 ? "mini-card" : "none"}>
                    <h1>HEllO</h1>
                </div>
            </div>
        </div>
    )
}
