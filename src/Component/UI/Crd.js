import React from 'react';

//import styles
import classes from './Card.module.scss'

const Card = props => {
    return (<div className={`${classes.card} ${props.className}`} onClick={props.onClick}>
            {props.children}
        </div>)
};

export default Card;