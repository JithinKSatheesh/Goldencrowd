import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { animated, useSpring,useTransition } from "react-spring";

import  Menu from './Menu'



export default function Navbar() {

    
    const [toggle, setToggle] = useState(false)
    // const [showMen, setShow] = useState(true)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    const [{width,widthMenu}, setSpringProps] = useSpring(() => ({
        width: "100%",
        widthMenu: "100%",
        from: {  width: "1%",widthMenu: "1%"},
        config: { mass: 10, tension: 550, friction: 140 } ,
    }))

    const transitions = useTransition(menuClick, null, {
        from: { position: 'absolute', opacity: 1,width:"100%" },
        enter: { opacity: 1 ,width:"100%"},
        leave: { opacity: 0 ,width:"0%"},
       
      })

    return (
        <>
            {menuClick?"":""}
            {
                transitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props} >
                            <Menu toggleMenu={setMenuClick} />
                        </animated.div>
                )
            }

            <div className="navbar d-flex  justify-content-between">
                <div className="nav-brand order-2 order-md-1">
                    <Link to="/">
                    <span className="text-black  nav-brand">
                        GOLDENCROWD
                        </span>
                    </Link>
                </div>
                <div className="nav-brand nav-menu-link   order-3  order-md-2">
                    <div className="text-black d-flex align-items-center nav-menu"
                        onMouseEnter={()=>{setToggleMenu(true)}} 
                        onMouseLeave={()=>{setToggleMenu(false)}}
                        onClick={()=>{setMenuClick(true)}} 
                    >
                        <div className="nav-menu-burgar-box">
                            <animated.div style={{ width:widthMenu,marginLeft: "auto"}} className="nav-menu-burgar-strip"></animated.div>
                            <animated.div style={{ width:widthMenu }} className="nav-menu-burgar-strip"></animated.div>
                            <animated.div style={{ width:widthMenu, marginLeft: "auto" }} className="nav-menu-burgar-strip"></animated.div>
                        </div>
                        <span className="nav-menu-text">
                            &nbsp; 
                            MENU
                            {toggleMenu?setSpringProps({widthMenu:"100%" }):setSpringProps({widthMenu:"70%"})}
                        </span>
                    </div>
                </div>
                <div className="nav-brand order-1 order-md-3">
                    <Link to="/">
                    <span className="text-black  nav-project"
                        onMouseEnter={()=>{setToggle(true)}} 
                        onMouseLeave={()=>{setToggle(false)}} 
                        >
                    <svg  width="14" height="14" viewBox="0 0 24 24"><path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/></svg>
                        &nbsp;
                        <span className="nav-menu-text">
                            PROJECTS
                        {toggle?setSpringProps({width:"100%"}):setSpringProps({width:"0%"})}
                        <animated.div className="nav-brand-underline" style={{width: width}}></animated.div>
                        </span>
                    </span>
                    </Link>
                </div>
            </div>
        </>
    )
}
