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
import SelectOptionPackage from "./SelectableOptions/SelectOptionPackage";

const SpaceshipConfigurator = props => {

    const [colors, setColors] = useState([])
    const [powers, setPowers] = useState([])
    const [wrapDrives, setWrapDrives] = useState([])
    const [optionPackages, setOptionPackages] = useState([])
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

    // fetch powers
    useEffect(() => {
        setPowers([
            {
                price: 0,
                title: "100 MV",
            },
            {
                price: 200,
                title: "150 MV",
            },
            {
                price: 500,
                title: "200 MV",
            }
        ])
    }, [])

    // fetch wrap drives
    useEffect(() => {
        setWrapDrives([
            {
                price: 0,
                title: "No",
            },
            {
                price: 1000,
                title: "Yes",
            },
        ])
    }, [])

    // fetch option packages
    useEffect(() => {
        setOptionPackages([
            {
                price: 0,
                title: "Basic",
            },
            {
                price: 100,
                title: "Sport",
            },
            {
                price: 500,
                title: "Lux",
            },
        ])
    }, [])

    // receipt items
    useEffect(() =>{
        setReceiptTotalPrice(Object.keys(receiptItems).reduce(function(prev, current) {
            return prev + +receiptItems[current].price
        }, 0))
    }, [receiptItems])

    const onReceivedColor = item => {
        setReceiptItems(prevState => ({
            ...prevState, "color": {
                title: "color",
                price: item.price,
                prefix: "+",
            }
        }))
    }

    const onReceivedPower = item =>{
        setReceiptItems(prevState => ({
            ...prevState, "power": {
                title: "power",
                price: item.price,
                prefix: "+",
            }
        }))
    }
    const onReceivedWrapDrive = item =>{
        setReceiptItems(prevState => ({
            ...prevState, "wrapDrive": {
                title: "wrap drive",
                price: item.price,
                prefix: "+",
            }
        }))
    }
    const onReceivedOptionPackage = item =>{
        setReceiptItems(prevState => ({
            ...prevState, "optionPackage": {
                title: "option package",
                price: item.price,
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
                        <SelectColor items={colors} onReceivedItem={onReceivedColor}/>
                        <SelectPower items={powers} onReceivedItem={onReceivedPower}/>
                        <WrapDrive items={wrapDrives} onReceivedItem={onReceivedWrapDrive}/>
                        <SelectOptionPackage items={optionPackages} onReceivedItem={onReceivedOptionPackage}/>
                    </div>
                    <Receipt className={grid.gridCol4} items={receiptItems} totalPrice={receiptTotalPrice}/>
                </div>
            </div>
        </Card>
    )
};

export default SpaceshipConfigurator;