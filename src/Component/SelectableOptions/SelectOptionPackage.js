import React, {useState} from "react";

//import components
import Card from "../UI/Card";

//import styles
import classes from './Box.module.scss'
import grid from "../UI/grid.module.scss";

const SelectOptionPackage = (props) => {
    const {items, onReceivedItem} = {...props}
    const [indexCurrentItem, setIndexCurrentItem] = useState()

    const onSelectedItem = index => {
        setIndexCurrentItem(index)
        onReceivedItem(items[index])
    }

    return (
        <div>
            <p className={classes.boxTitle}>Select option package:</p>
            <div className={`${classes.boxWrapper} ${grid.grid}`}>
                {items?.map((item, index) => {
                    return (
                        <Card key={Math.random()} className={`${classes.box} ${grid.gridCol4}`}
                              onClick={e => onSelectedItem(index)} active={index === indexCurrentItem}>
                            <p>{item.title}</p>
                            <p>{item.price > 0 ? `+${item.price}€` : '' }</p>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
};

export default SelectOptionPackage;