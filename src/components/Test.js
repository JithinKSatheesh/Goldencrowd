import React, { useState, useRef } from 'react';
import { animated, useTransition,useTrail } from 'react-spring';


export default function Test() {

  const items = ["W","E","C","R","E","A","T","E","D","I","G","I","T","A","L","S","O","L","U","T","I","O","N","S"]
  const config = { mass: 5, tension: 2000, friction: 200 }

  const [toggle, setToggle] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    width: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, width: 0 },
  })

  return (
    <div>
      <div className="space-50"></div>
      <div className="div d-flex">

        {trail.map(({ x, width, ...rest }, index) => (
          <animated.span
            key={index}
            className="d-flex"
            style={{ ...rest, width, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.span style={{ width:"30px" }}>{items[index]}</animated.span>
          </animated.span>
        ))}
      </div>
    </div>
  )
};