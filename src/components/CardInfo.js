import React from 'react';
import {useSpring, animated} from 'react-spring'

function CardInfo (props) {

    const style= useSpring({opacity: 1, from: {opacity:0}});


    return(
        <animated.div calssName='m-card-info' style={style}>
            <p calssName='m-card-title'>{props.title}</p>
            <p calssName='m-card-subtitl'>{props.subTitle}</p>
            <a href={props.link} target='_blank' rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default CardInfo;