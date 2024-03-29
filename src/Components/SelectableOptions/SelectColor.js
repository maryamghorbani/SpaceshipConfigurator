import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

//import components
import Card from "../UI/Card";

//import styles
import classes from './Box.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const SelectColor = props => {

    const {items, onReceivedItem} = {...props}
    const [indexCurrentItem, setIndexCurrentItem] = useState()

    const onSelectedItem = index => {
        setIndexCurrentItem(index)
        onReceivedItem(items[index])
    }

    return (
        <Container>
            <Row xs={12} className={classes.boxTitle}>Select color:</Row>
            <Row data-testid='colors' xs={12}>
                {items?.map((item, index) => {
                    return (
                        <Col xs={12} sm={4}>
                            <Card key={item.title} className={classes.box} onClick={e => onSelectedItem(index)} active={index === indexCurrentItem}>
                                <div className={classes.colorBox} style={{backgroundColor: `${item.color}`}}/>
                                <p>+{item.price}€</p>
                                <p>{item.title}</p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
};

export default SelectColor;