import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { animated, useSpring } from "react-spring";


export default function Sidebar() {

        const [rightBar,setRightBar] =  useState(false)
        const [leftBar,setLeftBar] =  useState(false)
        const [sideSpring, setSpringProps] = useSpring(() => ({
            width: "0px",
            width_2:"0px",
            from: { width: "0px", width_2:"0px" },
            config: { mass: 20, tension: 650, friction: 100 }
        }))

        // const location = useLocation().pathname

        return (
            <>  
                <Link to="/WhatWeDo" >
                    <div className="sidebar-box right" 
                        onMouseEnter={()=>{setRightBar(true)}} 
                        onMouseLeave={()=>{setRightBar(false)}} 
                        onClick={()=>{setRightBar(false)}}
                        >
                        WHAT WE DO
                        <br/>
                        |
                    </div>
                </Link>
                {rightBar?setSpringProps({width:"100px"}): setSpringProps({width:"0px"})}
                <animated.div style={{width: sideSpring.width}} className="sidebar-animation-what-we-do right"></animated.div>


                <Link to="/" >
                    <div className="sidebar-box left" 
                        onMouseEnter={()=>{setLeftBar(true)}} 
                        onMouseLeave={()=>{setLeftBar(false)}} 
                        onClick={()=>{setLeftBar(false)}}
                        >
                        WHO WE ARE
                        <br/>
                        |
                    </div>
                </Link>
                {leftBar?setSpringProps({width_2:"100px"}): setSpringProps({width_2:"0px"})}
                <animated.div style={{width: sideSpring.width_2}} className="sidebar-animation-what-we-do bg-darkgrey left "></animated.div>
            
            </>
        )
    
}
