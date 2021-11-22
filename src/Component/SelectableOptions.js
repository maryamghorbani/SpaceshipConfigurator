import React from "react";

//import components
import SelectColor from "./SelectableOptions/SelectColor";
import SelectPower from "./SelectableOptions/SelectPower";
import WrapDrive from "./SelectableOptions/WrapDrive";
import SelectOptionPakage from "./SelectableOptions/SelectOptionPakage";

const SelectableOptions = props => {

    const getColorPriceHandler = (colorPrice) => {
        console.log(colorPrice)
    };

    return (
        <div className={props.className}>
            <SelectColor onGetColoPreice={getColorPriceHandler}/>
            <SelectPower/>
            <WrapDrive/>
            <SelectOptionPakage/>
        </div>
    )
};

export default SelectableOptions;