import React from "react";

//import components
import Card from "./UI/Card";

//import styles
import classes from './Receipt.module.scss'

const Receipt = props => {
    const {items, totalPrice} = {...props}

    return (
        <div className={props.className}>
            <Card className={classes.receipt}>
                {
                    Object.keys(items).map(key =>
                        <div key={Math.random()} className={classes.row}>
                            <p>{items[key].title}:</p>
                            <p>{items[key].prefix}{items[key].price}€</p>
                        </div>
                    )

                }
                <div className={`${classes.row} ${classes.total}`}>
                    <p>Total:</p>
                    <p>{totalPrice}€</p>
                </div>
            </Card>
        </div>
    )
};

export default Receipt;