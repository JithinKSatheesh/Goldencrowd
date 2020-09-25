import React, { useEffect,useState ,useRef } from "react";
import { animated, useSpring } from "react-spring";
import TeamCodeImg from '../assets/team_code.jpg'
import jks from '../assets/jks.jpg'
import mg from '../assets/mg.jpg'
import jp from '../assets/jp.jpg'
import TeamImgCard from './TeamImgCard'
import TeamSideBar from './TeamSidebar'


// import VisibilitySensor from "react-visibility-sensor";

export default function Team() {
    const calc = o => `translateY(${o * 0.03 - 50 }px)`
    const calc2 = o => `translateY(${o * 0.02 - 50 }px)`

    const ref = useRef()
    const [{ offset,width }, set] = useSpring(() => ({ 
        offset: 0 ,
        config: { mass: 5, tension: 350, friction: 40 }
    }))

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
            <div className="space-50"></div>
            <div className="space-50"></div>
            {/* <div className="team-side-bar"></div> */}
            <div className="div d-flex">
                <TeamSideBar/>
            </div>
            
            <div className="container" >
                <div ref={ref}>
                    <animated.div style={{ transform: offset.interpolate(calc) }}  className="row  d-flex">
                        {/* col right */}
                        <div className="col-md-6 col-12 d-flex  order-1 order-md-2 ">
                            <div className="team-bg-box text-right">
                                <img src={TeamCodeImg} className="team-code-img" alt="" />
                            </div>
                            <div className="team-cosmetic-box  text-center ">
                                    <span className=" font-weight-bold">
                                        CONTACT US
                                    </span>
                                    <br />
                                    <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M24 11.871l-5-4.871v3h-19v4h19v3z" /></svg>
                            </div>
                        </div>
                        {/* col left */}
                        <div className="col-md-6 col-12 order-2 order-md-1">
                            <div className="space-20"></div>
                            <div className="text-black h5 font-weight-bold text-center text-md-left">
                                OUR TEAM
                        </div>
                            <div className="text-black team-title-big">
                                WE MAKE WHAT WE LOVE
                            </div>
                        </div>
                    </animated.div>
                </div>


                <div className="space-50"></div>


                <div className="row ">
                    {/* team image 1 */}
                    <div className="space-20"></div>
                    <div className="col-10  m-3">

                        <div className="row">
                            <div className="col-md-6   col-12">
                                <div ref={ref} >
                                    <animated.div  style={{ transform: offset.interpolate(calc2) }} >
                                        <TeamImgCard img={jks} />
                                    </animated.div>
                                </div>
                            </div>
                            <div  className="col-md-6 col-12">
                                <div className="space-50"></div>
                                <div className="h4  font-weight-bold">JITHIN K SATHEESH</div>
                                <div className="h5 "><span className="text-warning">CO FOUNDER </span> / FRONT-END ENGINEER</div>
                                <div className="h6 text-secondary">From kerala , India</div>
                                <div className="h6 text-secondary">jithinksatheesh@gmail.com</div>
                                <br />
                                <div className="h6 text-secondary">
                                    <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                &nbsp;
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* ********* */}
                    {/* team image 2 */}
                    <div className="col-12 m-3">
                        <div className="space-50"></div>
                        <div className="row d-flex ">
                            <div className="col-md-8 col-12 order-2 order-md-1 text-left text-md-right">
                                    <div className="space-50"></div>
                                    <div className="h4  font-weight-bold">MARTIN GEORGE</div>
                                    <div className="h5 "><span className="text-warning">CO FOUNDER </span> / BACK-END ENGINEER</div>
                                    <div className="h6 text-secondary">From New Delhi , India</div>
                                    <div className="h6 text-secondary">martingeo15@gmail.com</div>
                                    <br />
                                    <div className="h6 text-secondary">
                                        <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        &nbsp;
                                        <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                                    </div>
                            </div>
                            <div className="col-md-4  col-12 order-1 order-md-2 d-flex">
                                <div ref={ref} >
                                    <animated.div  style={{ transform: offset.interpolate(calc2) }} >
                                        <TeamImgCard img={mg} />
                                    </animated.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ********* */}
                    {/* team image 3 */}
                    <div className="col-12 m-3">
                        <div className="space-50"></div>
                        <div  className="row  ">
                            <div   className="col-md-6  col-12 d-flex">
                                <div ref={ref} >
                                    <animated.div style={{ transform: offset.interpolate(calc2) }} >
                                        <TeamImgCard img={jp} />
                                    </animated.div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="space-50"></div>
                                <div className="h4  font-weight-bold">JYOTHIS P</div>
                                <div className="h5 "> <span className="text-warning">CO FOUNDER </span> / BACK-END DEVELOPER</div>
                                <div className="h6 text-secondary">From kerala , India</div>
                                <div className="h6 text-secondary">jyothisp52@gmail.com</div>
                                <br />
                                <div className="h6 text-secondary">
                                    <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                &nbsp;
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ********* */}
                </div>
            </div>

            {/* <animated.h1 style={props}>hello</animated.h1> */}
            {/* ===================== */}
            {/* <div className="space-50 bg-success"></div>
                <VisibilitySensor>
                    {({isVisible}) =>
                        {  
                            // console.log(color,opacity)     
                            isVisible? setAnimation({opacity: 1,width:"200px",height:'300px'}) : setAnimation({opacity: 0,width:"10px",height:'20px'})
                            return    <animated.div  style={{ opacity : opacity,backgroundColor:color  ,height:height,width:width}}  >I am {isVisible ? 'visible' : 'invisible'}</animated.div>
                        } 
                    
                    }
                </VisibilitySensor>
            <div className="space-50 bg-danger"></div> */}

            {/* <VisibilitySensor active={true}

                >
                {({isVisible}) =>
                    {  
                        isVisible? console.log("revealed") : console.log("closed")
                        isVisible? setAnimation({opacity: 1,width:"200px",height:'300px'}) : setAnimation({opacity: 0,width:"10px",height:'20px'})
                        return (
                            <animated.div  style={{ transform: offset.interpolate(calc2) }} >
                                <animated.img src={jp} style={{height:height,width:width}} className="team-member-img" alt="" />
                            </animated.div>
                        )}
                }
            </VisibilitySensor> */}

            {/* =================== */}
        </>
    )
}
