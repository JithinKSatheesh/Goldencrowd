import React, { useState } from 'react'
import { animated, useSpring } from "react-spring";


export default function Splashtransition() {

    const [sideSpringLoop, setSideSpringLoop] = useSpring(()=>({
        from:{ Splash_width: '0%',left:'unset',right:'0'},
        to: async next =>{
            await next({Splash_width:'100%'})
            await next({left:0,right:'unset'})
            await next({Splash_width:'0%'})   
        },
    }))

    return (
        <>
        {<animated.div style={{width: sideSpringLoop.Splash_width,left:sideSpringLoop.left,right:sideSpringLoop.right}} className="sidebar-animation-what-we-do"></animated.div>}    
        </>
    )
}
