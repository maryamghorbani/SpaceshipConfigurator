import React from "react";

//import component
import Card from "./UI/Crd";
import SelectableOptions from "./SelectableOptions";
import Receipt from "./Receipt";

//import styles
import classes from './SpaceshipConfigurator.module.scss'

const SpaceshipConfigurator = () => {
    return(
        <Card>
            <div className={classes.Wrapper}>
                <p className={classes.title}>Spaceship Configurator</p>
                <div className={classes.configuratorWrapper}>
                    <SelectableOptions/>
                    <Receipt/>
                </div>
            </div>
        </Card>
    )
};

export default SpaceshipConfigurator;