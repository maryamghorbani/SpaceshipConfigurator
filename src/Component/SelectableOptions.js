import React from "react";

//import components
import SelectColor from "./SelectableOptions/SelectColor";
import SelectPower from "./SelectableOptions/SelectPower";
import WrapDrive from "./SelectableOptions/WrapDrive";
import SelectOptionPakage from "./SelectableOptions/SelectOptionPakage";

const SelectableOptions = props => {
    return(
        <div className={props.className}>
            <SelectColor/>
            <SelectPower/>
            <WrapDrive/>
            <SelectOptionPakage/>
        </div>
    )
};

export default SelectableOptions;