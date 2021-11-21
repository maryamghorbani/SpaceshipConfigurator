import React from "react";

//import components
import Card from "./UI/Crd";

//import styles
import classes from './Receipt.module.scss'

const Receipt = props => {
    return(
        <div className={props.className}>
            <Card className={classes.receipt}>Receipt</Card>
        </div>
    )
};

export default Receipt;