// import {useSpring, animated} from 'react-spring'
import React from 'react'
import { useSpring, animated } from 'react-spring';


const HookedComponent = () => {
    const props = useSpring({
        opacity: 9,
        color: 'red',
        from: { opacity: 0 },
        delay: '6000'
    })
    return <animated.div style={props} className='Hooked'>This text Faded in Using hooks</animated.div>
}

const HookedComponentTwo = () => {
    const props = useSpring({
        opacity: 9,
        color: 'red',
        from: { opacity: 0 },
        delay: '1000'
    })
    return <animated.div style={props} className='HookedTwo'>This text Faded in Using hooks</animated.div>
}

const HookedComponentThree = () => {
    const props = useSpring({ number: 1, from: { number: 0 } })
return <animated.span>{props.number}</animated.span>
   
}
  

export default (HookedComponent, HookedComponentTwo, HookedComponentThree);