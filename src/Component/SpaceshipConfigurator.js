import React, {useEffect, useState} from "react";

//import component
import Card from "./UI/Card";
import Receipt from "./Receipt";

//import styles
import classes from './SpaceshipConfigurator.module.scss'
import grid from './UI/grid.module.scss'
import SelectColor from "./SelectableOptions/SelectColor";
import SelectPower from "./SelectableOptions/SelectPower";
import WrapDrive from "./SelectableOptions/WrapDrive";
import SelectOptionPakage from "./SelectableOptions/SelectOptionPakage";

const SpaceshipConfigurator = props => {

    // const [finalColorPrice, setFinalColorPrice] = useState();
    const [colors, setColors] = useState([])
    const [receiptItems, setReceiptItems] = useState({
        "basePrice": {
            title: "Base Price",
            price: 1000,
            prefix: "",
        },
        "color": {
            title: "color",
            price: 0,
            prefix: "+",
        },
        "power": {
            title: "power",
            price: 0,
            prefix: "+",
        },
        "wrapDrive": {
            title: "wrap drive",
            price: 0,
            prefix: "+",
        },
        "optionPackage": {
            title: "option package",
            price: 0,
            prefix: "+",
        },
    })
    const [receiptTotalPrice, setReceiptTotalPrice] = useState(0)

    // fetch colors
    useEffect(() => {
        setColors([
            {
                color: "#ffffff",
                price: 0,
                title: "Snow",
            },
            {
                color: "#FF7A00",
                price: 100,
                title: "Volcano",
            },
            {
                color: "#6BE4FF",
                price: 100,
                title: "Sky",
            }
        ])
    }, [])

    //
    useEffect(() =>{
        setReceiptTotalPrice(Object.keys(receiptItems).reduce(function(prev, current) {
            return prev + +receiptItems[current].price
        }, 0))
    }, [receiptItems])

    const onReceivedColor = color => {
        setReceiptItems(prevState => ({
            ...prevState, "color": {
                title: "color",
                price: color.price,
                prefix: "+",
            }
        }))
    }

    return (
        <Card className={classes.Wrapper}>
            <div>
                <p className={classes.title}>Spaceship Configurator</p>
                <div className={grid.grid}>
                    <div className={grid.gridCol8}>
                        <SelectColor colors={colors} onReceivedColor={onReceivedColor}/>
                        <SelectPower/>
                        <WrapDrive/>
                        <SelectOptionPakage/>
                    </div>
                    <Receipt className={grid.gridCol4} items={receiptItems} totalPrice={receiptTotalPrice}/>
                </div>
            </div>
        </Card>
    )
};

export default SpaceshipConfigurator;