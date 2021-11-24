import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";

//import component
import Card from "./UI/Card";
import Receipt from "./Receipt";

//import styles
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './SpaceshipConfigurator.module.scss'
import SelectColor from "./SelectableOptions/SelectColor";
import SelectPower from "./SelectableOptions/SelectPower";
import WrapDrive from "./SelectableOptions/WrapDrive";
import SelectOptionPackage from "./SelectableOptions/SelectOptionPackage";
import {Container} from "react-bootstrap";

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
                features: [
                    "Air conditioning",
                    "Cloths seats",
                    "Fm radio"
                ],
            },
            {
                price: 100,
                title: "Sport",
                features: [
                    "Air conditioning",
                    "Cloths seats",
                    "Fm radio",
                    "Personal tech support"
                ],
            },
            {
                price: 500,
                title: "Lux",
                features: [
                    "Air conditioning",
                    "Luxury seats",
                    "Fm radio",
                    "Chrome wheels",
                    "Window tint",
                    "Subwoofer"
                ],
            },
        ])
    }, [])

    // receipt items
    useEffect(() => {
        setReceiptTotalPrice(Object.keys(receiptItems).reduce(function (prev, current) {
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
    const onReceivedPower = item => {
        setReceiptItems(prevState => ({
            ...prevState, "power": {
                title: "power",
                price: item.price,
                prefix: "+",
            }
        }))
    }
    const onReceivedWrapDrive = item => {
        setReceiptItems(prevState => ({
            ...prevState, "wrapDrive": {
                title: "wrap drive",
                price: item.price,
                prefix: "+",
            }
        }))
    }
    const onReceivedOptionPackage = item => {
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
            <Container>
                <Row className={classes.title}>Spaceship Configurator</Row>
                <Row>
                    <Col xs={12} md={8}>
                        <SelectColor items={colors} onReceivedItem={onReceivedColor}/>
                        <SelectPower items={powers} onReceivedItem={onReceivedPower}/>
                        <WrapDrive items={wrapDrives} onReceivedItem={onReceivedWrapDrive}/>
                        <SelectOptionPackage items={optionPackages} onReceivedItem={onReceivedOptionPackage}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Receipt items={receiptItems} totalPrice={receiptTotalPrice}/>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
};

export default SpaceshipConfigurator;