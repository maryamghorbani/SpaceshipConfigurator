import React from "react";

//import components
import Card from "../UI/Crd";

//import styles
import classes from './Box.module.scss'

const SelectColor = () => {
    return (
        <div>
            <p className={classes.boxTitle}>Select color:</p>
            <div className={classes.boxWrapper}>
                <Card className={classes.box}>1</Card>
                <Card className={classes.box}>2</Card>
                <Card className={classes.box}>3</Card>
            </div>
        </div>
    )
};

export default SelectColor;