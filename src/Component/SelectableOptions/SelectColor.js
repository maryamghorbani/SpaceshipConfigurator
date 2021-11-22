import React, {useState} from "react";

//import components
import Card from "../UI/Card";

//import styles
import classes from './Box.module.scss'
import grid from "../UI/grid.module.scss";

const SelectColor = props => {

    const {items, onReceivedItem} = {...props}
    const [indexCurrentItem, setIndexCurrentItem] = useState()

    const onSelectedItem = index => {
        setIndexCurrentItem(index)
        onReceivedItem(items[index])
    }

    return (
        <div>
            <p className={classes.boxTitle}>Select color:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                {items?.map((item, index) => {
                    return (
                        <Card key={item.title} className={`${classes.box} ${grid.gridCol4}`} onClick={e => onSelectedItem(index)} active={index === indexCurrentItem}>
                            <div className={classes.colorBox} style={{backgroundColor: `${item.color}`}}/>
                            <p>+{item.price}€</p>
                            <p>{item.title}</p>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
};

export default SelectColor;