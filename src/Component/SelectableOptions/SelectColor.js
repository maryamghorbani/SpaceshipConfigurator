import React from "react";

//import components
import Card from "../UI/Crd";

//import styles
import classes from './Box.module.scss'
import grid from "../UI/grid.module.scss";

const SelectColor = () => {
    return (
        <div>
            <p className={classes.boxTitle}>Select color:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <div className={`${classes.colorBox} ${classes.snowBox}`}></div>
                    <p>+0€</p>
                    <p>Snow</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <div className={`${classes.colorBox} ${classes.volcanoBox}`}></div>
                    <p>+100€</p>
                    <p>Volcano</p>
                </Card>
                <Card className={`${classes.box} ${grid.gridCol4}`}>
                    <div className={`${classes.colorBox} ${classes.skyBox}`}></div>
                    <p>+100€</p>
                    <p>Sky</p>
                </Card>
            </div>
        </div>
    )
};

export default SelectColor;