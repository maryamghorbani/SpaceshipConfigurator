import React from "react";

//import components
import Card from "../UI/Card";

//import styles
import classes from './Box.module.scss'
import grid from "../UI/grid.module.scss";

const WrapDrive = () => {
    return (
        <div>
            <p className={classes.boxTitle}>Select drive:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>No</p>
                    <p>+0€</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>Yes</p>
                    <p>+1000€</p>
                </Card>
            </div>
        </div>
    )
};

export default WrapDrive;