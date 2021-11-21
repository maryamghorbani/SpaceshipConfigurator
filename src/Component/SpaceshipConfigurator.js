import React from "react";

//import component
import Card from "./UI/Crd";

//import styles
import classes from './SpaceshipConfigurator.module.scss'

const SpaceshipConfigurator = () => {
    return(
        <Card>
            <div className={classes.configuratorWrapper}>
                <div className={classes.title}>Spaceship Configurator</div>
            </div>
        </Card>
    )
};

export default SpaceshipConfigurator;