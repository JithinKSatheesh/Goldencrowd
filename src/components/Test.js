import React, { useState, useRef } from 'react';
import { animated, useTransition } from 'react-spring';


export default function Test() {

  const [show, setShow] = useState(true)
  const transitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config:{duration:3000}
  })
  return (<>
    <div className="space-50"></div>
    <div className="space-50"></div>
    <div className="space-50"></div>
  <div className="div">

  {
    transitions.map(({ item, key, props }) =>
    item && <animated.div key={key} style={props}>🔥 hello </animated.div>
    )
  }
  </div>
  <div className="space-50"></div>
  <div onClick={()=>{setShow(state=> !state)}} >Hello</div>
  </>)
};