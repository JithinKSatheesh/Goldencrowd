import React ,{useEffect}from 'react'
import SplashTransition from './SplashTransitionLeft'
import ParallaxImg from './Parallaximage'
import deskImage from '../assets/parallaxMac.jpg'
import parallaxYellow from '../assets/parallaxYellow.jpg'
import TextSpreadAnimation from './TextSpreadAnimation'
import WWDService from './WhatWeDoService'

export default function Whatwedo() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>  
            <SplashTransition/>
            <div className="space-50"></div>
            <div className="space-50"></div>
            <div className="space-50"></div>

            <div className="text-center font-weight-bold">WHAT  &nbsp;WE  &nbsp;DO</div>
            <div className="space-20"></div>

            <div className="what-we-do-big text-center">
                <TextSpreadAnimation text="WE CREATE"/>
                <span className="text-warning">
                    <TextSpreadAnimation text="DIGITAL"/>
                </span>
                <TextSpreadAnimation text="SOLUTIONS"/>
            </div>
            <div className="space-50"></div>
            <ParallaxImg display="block" img={deskImage}/>
            <div className="space-50"></div>
            <WWDService/>
            <ParallaxImg display="block" img={parallaxYellow}/>
            <div className="bg-black text-light">
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div style={{letterSpacing:"10px"}} className="h5 text-center ">
                    <span className="h3 ">"</span> WE WILL HELP YOU GO ONLINE <span className="h3">"</span>
                </div>
                <div className="space-50"></div>
                {/* ============= */}
            {/* tri color */}
            <div className="container">
                <div style={{ backgroundColor: "#ec933c" }} className="space-20"></div>
                <div className="text-primary text-center font-weight-bold bg-white">
                    <div className="space-20"></div> 
                    #DIGITALINDIA
                    <div className="space-20"></div> 
                </div>
                <div style={{ backgroundColor: "#3b841e" }} className="space-20"></div>
            </div>
            {/* ============= */}
            </div>
            
        
            <div className="footer-secondary bg-black ">
                <div className="space-50"></div>
                <div style={{letterSpacing:"10px"}} className="text-center text-white h4 ">
                    CONTACT US <br/> 
                    <span className="btn">
                        <svg fill="white" width="50" height="50" viewBox="0 0 24 24"><path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/></svg>
                    </span>
                </div>
                
            </div>
            <div className="footer-primary"></div>
        
        </>
    )
}
