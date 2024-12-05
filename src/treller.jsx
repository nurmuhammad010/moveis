import React from 'react'

export default function Treller(props) {
    const {name, image} = props
  return (
    <div className='title'>
        <div className="cart">
      <img src={image} alt="" />
      <h1>{name}</h1>
      </div>
    </div>
  )
}