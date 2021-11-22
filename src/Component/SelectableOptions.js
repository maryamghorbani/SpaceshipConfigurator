import React from "react";

//import components
import SelectColor from "./SelectableOptions/SelectColor";
import SelectPower from "./SelectableOptions/SelectPower";
import WrapDrive from "./SelectableOptions/WrapDrive";
import SelectOptionPakage from "./SelectableOptions/SelectOptionPakage";

const SelectableOptions = props => {

    const receivedColorPriceHandler = (data) => {
        props.onGetColorPrice(data)
    };

    return (
        <div className={props.className}>
            <SelectColor onRecievedColoPreice={receivedColorPriceHandler}/>
            <SelectPower/>
            <WrapDrive/>
            <SelectOptionPakage/>
        </div>
    )
};

export default SelectableOptions;