import React from "react";

//import components
import Card from "./UI/Crd";

//import styles
import classes from './Receipt.module.scss'

const Receipt = props => {
    return(
        <div className={props.className}>
            <Card className={classes.receipt}>
                <div className={classes.row}>
                    <p>Base price:</p>
                    <p>1000€</p>
                </div>
                <div className={classes.row}>
                    <p>color:</p>
                    <p>{props.colorPrice}</p>
                </div>
                <div className={classes.row}>
                    <p>power:</p>
                    <p>+200€</p>
                </div>
                <div className={classes.row}>
                    <p>wrap drive:</p>
                    <p>+0€</p>
                </div>
                <div className={classes.row}>
                    <p>option package:</p>
                    <p>+0€</p>
                </div>
                <div className={`${classes.row} ${classes.total}`}>
                    <p>Total:</p>
                    <p>1200€</p>
                </div>
            </Card>
        </div>
    )
};

export default Receipt;