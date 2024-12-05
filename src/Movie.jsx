import React from 'react'

export default function Movie(props) {

    const { episodeCount } = props

    return (
        <div className="card">
            <div className="img">
                <img src="" alt="card img" />
            </div>
            <div className="title">
                <h3>{episodeCount}</h3>
            </div>
        </div>
    )
}
