import React from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';

//import components
import SpaceshipConfigurator from "./Components/SpaceshipConfigurator";
import SelectColor from "./Components/SelectableOptions/SelectColor";
import SelectPower from "./Components/SelectableOptions/SelectPower";
import WrapDrive from "./Components/SelectableOptions/WrapDrive";
import SelectOptionPackage from "./Components/SelectableOptions/SelectOptionPackage";
import Card from "./Components/UI/Card";

afterEach(cleanup) //clean up everything after each test to avoid memory leaks

describe('<SpaceshipConfigurator /> with no props', () => {
    const container = shallow(<SpaceshipConfigurator/>);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should have an title', () => {
        expect(container.find({className: 'title'}).text()).toEqual('Spaceship Configurator');
    });

    describe('<SelectColor /> with props', () => {
        const initialColorProps = {
            color: "#ffffff",
            price: 0,
            title: "Snow",
        };
        const colorComponent = shallow(<SelectColor {...initialColorProps} />);
        it('should have an title', () => {
            expect(colorComponent.find({className: 'boxTitle'}).text()).toEqual('Select color:');
        });
        it('should have Card component', () => {
            expect(colorComponent.find(<Card/>)).toBeTruthy();
        });
        it('should have a div via initialColorProps.color background', () => {
            const { getByTestId } = render(<SelectColor />)
            expect(getByTestId("colorBox")).toHaveStyle('background-color: #fff');
        })
    });
    describe('<SelectPower /> with props', () => {
        const powerComponent = shallow(<SelectPower/>);
        it('should have an title', () => {
            expect(powerComponent.find({className: 'boxTitle'}).text()).toEqual('Select power:');
        });
        it('should have Card component', () => {
            expect(powerComponent.find(<Card/>)).toBeTruthy();
        });
    });
    describe('<WrapDrive /> with props', () => {
        const driveComponent = shallow(<WrapDrive/>);
        it('should have an title', () => {
            expect(driveComponent.find({className: 'boxTitle'}).text()).toEqual('Wrap drive:');
        });
        it('should have Card component', () => {
            expect(driveComponent.find(<Card/>)).toBeTruthy();
        });
    });
    describe('<SelectOptionPackage /> with props', () => {
        const packageComponent = shallow(<SelectOptionPackage/>);
        it('should have an title', () => {
            expect(packageComponent.find({className: 'boxTitle'}).text()).toEqual('Select option package:');
        });
        it('should have Card component', () => {
            expect(packageComponent.find(<Card/>)).toBeTruthy();
        });
    });
});