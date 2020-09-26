import React, { useState } from 'react';
import { animated,useTrail } from 'react-spring';


export default function Test(props) {
const items = props.text.split("")
const config = { mass: 5, tension: 2000, friction: 200 }

  const [toggle, setToggle] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    width: toggle ? 70 : 0,
    from: { opacity: 0, x: 20, width: 0 },
    delay:1000
  })

  return (
    <>
        <span className="d-flex justify-content-center">
        {trail.map(({ x, width, ...rest }, index) => (
            <animated.span
            key={index}
            className="d-flex text-center"
            style={{ ...rest, width, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
          {items[index]}
          </animated.span>
        ))}
        </span>
    </>
  )
};