import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring';

export default function DemoAnimation() {
    const [styles, api] = useSpring(() => ({
        from: { opacity: 1, color: 'red',fontSize:10 }
    }))
    const [toggle, setToggle] = useState(false);
    // Update spring with new props
    // api.start({opacity:1,color:'blue'});
    // api.stop();

    useEffect(()=>{
        return ()=>{
            api.stop();
        }
    })

    return <div className='container'>
        <button onClick={() => {
            api.start({ opacity: 1, color: 'blue',fontSize:20 });

        }}>start</button>

        <button onClick={() => {
            // Update spring with new props
            // setToggle(false);
            api.start({ opacity: 1, color: 'red',fontSize:10 });

        }}>stop</button>


        <animated.div style={styles}>i will fade</animated.div>
    </div>

}
