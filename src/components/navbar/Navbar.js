import React from 'react'
import {ITEMS} from "../../static";

function Navbar(props) {
  return (
    <div>
        <h2>{props.matn} {props.age * 2}</h2>
        {
          ITEMS.map((i, inx)=> <p key={inx}>{i}</p>)
        }
    </div>
  )
}

export default Navbar