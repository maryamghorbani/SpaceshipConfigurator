import React, {useState} from "react";

//import components
import Card from "../UI/Card";

//import styles
import classes from './Box.module.scss'
import grid from "../UI/grid.module.scss";

const SelectColor = props => {

    const {colors, onReceivedColor} = {...props}
    const [indexCurrentColor, setIndexCurrentColor] = useState()

    const changeColorPrice = index => {
        setIndexCurrentColor(index)
        onReceivedColor(colors[index])
    }

    return (
        <div>
            <p className={classes.boxTitle}>Select color:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                {colors?.map((color, index) => {
                    return (
                        <Card key={color.title} className={`${classes.box} ${grid.gridCol4}`} onClick={e => changeColorPrice(index)} active={index === indexCurrentColor}>
                            <div className={classes.colorBox} style={{backgroundColor: `${color.color}`}}/>
                            <p>+{color.price}€</p>
                            <p>{color.title}</p>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
};

export default SelectColor;