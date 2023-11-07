import React from 'react'
import "./Banner.css"

function Banner(props) {
    const {title, price, bg} = props
  return (
    <div className='banner' style={{background: `url(${bg}) no-repeat center/cover`}}>
        <h2>{title}</h2>
        <h3>{price} USD</h3>
        <img src={bg} width={300}  alt="" />
    </div>
  )
}

export default Banner