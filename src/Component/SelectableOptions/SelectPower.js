import React from "react";

//import components
import Card from "../UI/Crd";

//import styles
import classes from './Box.module.scss'
import grid from '../UI/grid.module.scss'

const SelectPower = () => {
    return (
        <div>
            <p className={classes.boxTitle}>Select power:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>100 MV</p>
                    <p>+0€</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>150 MV</p>
                    <p>+200€</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <p>200 MV</p>
                    <p>+500€</p>
                </Card>
            </div>
        </div>
    )
};

export default SelectPower;