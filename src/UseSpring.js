// import {useSpring, animated} from 'react-spring'
import React from 'react'
import { useSpring, animated } from 'react-spring';
    

const HookedComponent = () => {
    const props = useSpring({
        opacity: 9,
        color: 'yellow',
        from: { opacity: 0 },
        delay: '2000'
    })
    return <animated.div style={props}>This text Faded in Using hooks</animated.div>
}

 
export default HookedComponent;