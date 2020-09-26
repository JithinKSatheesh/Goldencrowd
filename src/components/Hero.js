import React ,{useEffect}from 'react'
import { useSpring } from 'react-spring'

import HeroImage from './Hero-image'
import HeroText from './Hero-text'
import Parallax from './Parallaximage'
import ParallaximageFooter from './ParallaximageFooter'
import Team from './Team'

import SplashTransition from './SplashTransitionRight'

import parallaxImg from '../assets/parallax.jpg'




const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]


export default function Hero() {
    const [props, set] = useSpring(() => ({ st: 0, xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <SplashTransition/>
            <div className="mouse-container"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            >

                {/* ======================== */}
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="space-50"></div>
               

                {/* ======================== */}



                <div className="row d-flex"  >
                    <div className="col col-0 col-md-6 order-2 order-md-1">
                        <HeroImage xy={props.xy} />
                    </div>
                    <div className="col col-12  col-md-6 order-1 order-md-2"  >
                        <HeroText />
                    </div>
                </div>
            </div>
            <div className="h4 text-center code-is-love">#CODEING <span className="text-warning">IS</span>LOVE </div>
            <Parallax img={parallaxImg}/>
            <Team/>
            <ParallaximageFooter/>

        </>
    )
}
