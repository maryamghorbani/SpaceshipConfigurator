import React, {useState} from "react";

//import component
import Card from "./UI/Crd";
import SelectableOptions from "./SelectableOptions";
import Receipt from "./Receipt";

//import styles
import classes from './SpaceshipConfigurator.module.scss'
import grid from './UI/grid.module.scss'

const SpaceshipConfigurator = props => {

    const [finalColorPrice , setFinalColorPrice] = useState();

    const getColorPriceHandler = (data) => {
        setFinalColorPrice(data)
        console.log(data)
    };

    return(
        <Card className={classes.Wrapper}>
            <div>
                <p className={classes.title}>Spaceship Configurator</p>
                <div className={grid.grid}>
                    <SelectableOptions className={grid.gridCol8} onGetColorPrice={getColorPriceHandler}/>
                <Receipt className={grid.gridCol4} item={finalColorPrice}/>
                </div>
            </div>
        </Card>
    )
};

export default SpaceshipConfigurator;