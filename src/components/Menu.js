import React from 'react'
import {Link} from 'react-router-dom'
import { animated, useSpring } from "react-spring";



export default function Menu(props) {
    const [{width,color,opacity_}] = useSpring(() => ({
        width: "100%",
        color:"#141414",
        from: {  width: "30%",color:"#141414",opacity_:0},
        to:async (next)=>{
            await next({width:"30%"})
            await next({width:"10%"})
            await next({width:"100%"})
            await next({opacity_:1})
            await next({color:"black"})
        },
        config: { mass: 10, tension: 850, friction: 100 } ,
    }))

    return (
        <>
            <animated.div style={{width:width,backgroundColor:color}}  className="menu-box">
                <animated.div style={{opacity:opacity_}} className="menu-box-content">
                    <div className="space-50"></div>
                    <div onClick={() => { props.toggleMenu(false) }} style={{ cursor: "pointer" }}
                        className="text-center text-white ">
                        <svg width="24" height="24" fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>
                    </div>
                    <div className="space-50"></div>
                    <Link onClick={() => { props.toggleMenu(false) }} to="/">
                        <div className="div h3 text-center text-white menu-link">
                            WHO WE ARE
                            <div className="menu-link-underline"></div>
                        </div>
                    </Link>
                    <div className="space-20"></div>
                    <Link onClick={() => { props.toggleMenu(false) }} to="/WhatWeDo">
                        <div className="div h3 text-center text-white menu-link">
                            <span>
                            WHAT WE DO
                            <div className="menu-link-underline"></div>
                            </span>
                        </div>
                    </Link>
                    <div className="space-20"></div>
                    <Link onClick={() => { props.toggleMenu(false) }} to="/WhatWeDo">
                        <div className="div h3 text-center text-white menu-link">
                            <span>
                            PROJECTS
                            <div className="menu-link-underline"></div>
                            </span>
                        </div>
                    </Link>
                    <div className="space-20"></div>
                    <Link onClick={() => { props.toggleMenu(false) }} to="/WhatWeDo">
                        <div className="div h3 text-center text-white menu-link">
                            <span>
                            SOLUTIONS
                            <div className="menu-link-underline"></div>
                            </span>
                        </div>
                    </Link>
                    <div className="space-20"></div>
                    <Link onClick={() => { props.toggleMenu(false) }} to="/WhatWeDo">
                        <div className="div h3 text-center text-white menu-link">
                            <span >
                            CONTACT US
                            <div className="menu-link-underline"></div>
                            </span>
                        </div>
                    </Link>

                </animated.div>
                    
            </animated.div>
        </>
    )
}
