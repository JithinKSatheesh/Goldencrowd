import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";

export default function HeroText (){

    const calc = o => `translateY(${o * 0.1 + 50}px)`
    const ref = useRef()
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset })
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    

        return (
            <>
                <div ref={ref}>
                <animated.div style={{ transform: offset.interpolate(calc) }} > 
                <div className="hero-text">
                    <div className="who-we-are-small text-black font-weight-bold">
                            WHO &nbsp; WE &nbsp; ARE
                    </div>
                    <div className="who-we-are-big text-black">
                        WE ARE 
                    </div>
                    <div className="who-we-are-big">
                        <span className="text-warning">GOLDEN</span> <span className="text-secondary"> CROWD</span>
                    </div>
                    <div className="space-20"></div>
                    <div className="text-secondary who-we-are-desc  ">
                        We are group of people with various skills working together on amazing projects.
                        <br/><br/>
                        We are problem solvers . 
                        Not how many good lines of code we write,  
                        our metric for success is how many problems we solve. 
                    </div>
                </div>
                </animated.div>

                </div>

            </>
        )
}
