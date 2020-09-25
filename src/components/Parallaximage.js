import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import parallaxImg from '../assets/parallax.jpg'




export default function Parallaximage () {

    const calc = o => `translateY(${o * 0.1 - 50}px)`
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
                    <div className="h4 text-center code-is-love">#CODEING <span className="text-warning">IS</span>LOVE </div>
                    <div className="parallax-box ">
                        <animated.img style={{ transform: offset.interpolate(calc) }} className="parallax-img" src={parallaxImg} alt="" />
                    </div>
                </div>

            </>
      )
}
