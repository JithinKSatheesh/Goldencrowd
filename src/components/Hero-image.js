import React from 'react'
import {animated} from 'react-spring'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'



const trans1 = (x, y) => `translate3d(${-x / 100 - 10}px,${-y / 200 + 100}px,0)`
const trans2 = (x, y) => `translate3d(${-x / 50 + 200 }px,${-y / 50 - 350}px,0)`
const trans4 = (x, y) => `translate3d(${-x / 10 - 300}px,${-y / 20 - 30}px,0)`


export default function HeroImage(props) {
    return (
        <>
        <div className="container"  >
            <animated.div className="bg-grey hero-image-block" style={{ transform: props.xy.interpolate(trans1) }} />
            <div className="d-flex">
                <animated.img className="hero-image-1"  src={hero2} style={{ transform: props.xy.interpolate(trans2)}} alt=""/>
                <animated.img className="hero-image-2"  src={hero1}  style={{ transform: props.xy.interpolate(trans4)}} alt=""/>
            </div>     
        </div>

        </>
    )
}
