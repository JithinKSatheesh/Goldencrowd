import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

export default function Teamimgcard(props) {

    const [visTrigger, setVisTrigger] = useState(true)
    // ===========================================
    // on reveal animations
    const [springProps, setSpringProps] = useSpring(() => ({
        width: "70%",
        from: { width: "1%" },
        config: { mass: 30, tension: 550, friction: 300 } ,
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
                    isVisible ? setSpringProps({ width: "70%" }) : setSpringProps({  width: "1%" })
                    return (
                        <animated.div 
                            style={{ width:"1px", height:"20px"}}
                            >
                            <animated.div src={props.img} style={{  width: springProps.width }} className="team-side-bar"></animated.div>

                        </animated.div>
                    )
                    }
                }
            </VisibilitySensor>
        </>
    )
}
