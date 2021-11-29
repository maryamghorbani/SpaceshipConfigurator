import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

//import components
import Card from "../UI/Card";

//import styles
import classes from './Box.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const SelectOptionPackage = (props) => {
    const {items, onReceivedItem} = {...props}
    const [indexCurrentItem, setIndexCurrentItem] = useState()

    const onSelectedItem = index => {
        setIndexCurrentItem(index)
        onReceivedItem(items[index])
    }

    return (
        <Container>
            <Row xs={12} className={classes.boxTitle}>Select option package:</Row>
            <Row xs={12}>
                {items?.map((item, index) => {
                    return (
                        <Col xs={12} sm={4}>
                            <Card key={Math.random()} className={classes.box}
                                  onClick={e => onSelectedItem(index)} active={index === indexCurrentItem}>
                                <p>{item.title}</p>
                                <p>{item.price > 0 ? `+${item.price}€` : <p></p> }</p>
                                <div className={classes.subBox}>
                                    {item.features.map(item => {
                                        return <div>{item}</div>
                                    })}
                                </div>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
};

export default SelectOptionPackage;