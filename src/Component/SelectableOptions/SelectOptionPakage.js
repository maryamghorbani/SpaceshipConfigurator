import React from "react";

//import components
import Card from "../UI/Crd";

//import styles
import classes from './Box.module.scss'
import grid from "../UI/grid.module.scss";

const SelectOptionPakage = () => {
    return (
        <div>
            <p className={classes.boxTitle}>Select option package:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>Basic</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>Sport</p>
                    <p>+100€</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>Lux</p>
                    <p>+500€</p>
                </Card>
            </div>
        </div>
    )
};

export default SelectOptionPakage;