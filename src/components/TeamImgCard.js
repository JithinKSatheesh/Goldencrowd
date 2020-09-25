import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";


const calc3 = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



export default function Teamimgcard(props) {

    const [visTrigger, setVisTrigger] = useState(true)
    // ===========================================
    // on reveal animations
    const [springProps, setSpringProps] = useSpring(() => ({
        color: 'white',
        opacity: 1,
        width: "300px",
        height: '300px' ,
        xys: [0, 0, 1],
        from: { color: 'white', opacity: 0, width: "1px", height: "1px",xys: [0, 0, 1] },
        config: { mass: 10, tension: 550, friction: 140 } ,
        delay: 500
    }))
    // ===========================================



    return (
        <>
            <VisibilitySensor active={visTrigger}
                onChange={(isVisible) => {
                    (isVisible && setVisTrigger(false))
                }}

            >
                {({ isVisible }) => {
                    isVisible ? setSpringProps({ opacity: 1, width: "250px", height: '400px' }) : setSpringProps({ opacity: 0, width: "1px", height: '1px' })
                    return (
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc3(x, y) })} 
                            onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })}
                            style={{ transform: springProps.xys.interpolate(trans) }}
                            >
                            <animated.img src={props.img} style={{ height: springProps.height, width: springProps.width }} className="team-member-img" alt="" />
                        </animated.div>
                    )
                    }
                }
            </VisibilitySensor>
        </>
    )
}
