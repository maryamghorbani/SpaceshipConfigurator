import React from "react";

//import component
import Card from "./UI/Crd";
import SelectableOptions from "./SelectableOptions";
import Receipt from "./Receipt";

//import styles
import classes from './SpaceshipConfigurator.module.scss'
import grid from './UI/grid.module.scss'

const SpaceshipConfigurator = () => {
    return(
        <Card className={classes.Wrapper}>
            <div>
                <p className={classes.title}>Spaceship Configurator</p>
                <div className={grid.grid}>
                    <SelectableOptions className={grid.gridCol9}/>
                    <Receipt className={grid.gridCol3}/>
                </div>
            </div>
        </Card>
    )
};

export default SpaceshipConfigurator;