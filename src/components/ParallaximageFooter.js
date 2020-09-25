import React, { useEffect, useRef,useState } from "react";
import { animated, useSpring, useTrail } from "react-spring";
import parallaxImg from '../assets/parallax-footer.jpg'

const items = [ 
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/></svg>, 
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>, 
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z"/></svg>
                
            ]
const config = { mass: 5, tension: 2000, friction: 200 }


export default function Parallaximage () {

    const calc = o => `translateY(${o * 0.1 - 400}px)`
    const ref = useRef()
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset })
    };

    // -----------------------
    
    const [toggle, setToggle] = useState(false)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        width: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, width: 0 },
    })
    
    // -----------------------
    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
        return (
            <>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div ref={ref}>
                    <div className="parallax-box-footer">
                        <animated.img style={{ transform: offset.interpolate(calc) }} className="parallax-img" src={parallaxImg} alt="" />
                    </div>
                </div>
                <div className="bg-black footer-secondary text-center"
                    onTouchStart={()=>{setToggle(state => !state)}}
                    >
                    <div className="space-50"></div>
                    <div className="space-50"></div>
                    <div className="space-50"></div>
                    <div className="h4 view-project" 
                        onMouseEnter={()=>{setToggle(true)}} 
                        onMouseLeave={()=>{setToggle(false)}} 
                        >
                        {/* --------------------------- */}
                        <div className="d-flex justify-content-center">

                            {trail.map(({ x, width, ...rest }, index) => (
                                <animated.span
                                key={index}
                                className="d-flex"
                                style={{ ...rest,width, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                    <animated.span style={{ width }}>{items[index]}</animated.span>
                                </animated.span>
                            ))}
                        </div>
                        <br/>
                        {/* --------------------------- */}
                        VIEW OUR PROJECTS
                        <br/>
                        <span className="btn">
                            <svg fill="darkgrey" width="50" height="50" viewBox="0 0 24 24"><path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/></svg>
                        </span>
                    </div>
                </div>
                <div className="footer-primary">

                </div>
                
            </>
      )
}
