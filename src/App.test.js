import React from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import {cleanup} from '@testing-library/react'

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
        const initialColorProps = {items: [{
            color: "#ffffff",
            price: 25,
            title: "Snow",
        }]};
        const colorComponent = shallow(<SelectColor {...initialColorProps} />);
        const colorWrapper = colorComponent.find(Card);
        it('should have an title', () => {
            expect(colorComponent.find({className: 'boxTitle'}).text()).toEqual('Select color:');
        });
        it('should have Card component', () => {
            expect(colorComponent.find(<Card/>).exists).toBeTruthy();
        });
        it('Card should have a {title} key', function () {
            expect(colorWrapper.at(0).key()).toEqual('Snow');
        });
        it('should have div element with expected text', () => {
            expect(colorWrapper.at(0).find('div').at(0).text()).toEqual('')
        });
        it('color component should have p element with expected text', () => {
            expect(colorWrapper.at(0).find('p').at(0).text()).toEqual('+25€')
        });
        it('color component should have p element with expected text', () => {
            expect(colorWrapper.at(0).find('p').at(1).text()).toEqual('Snow')
        });
    });
    describe('<SelectPower /> with props', () => {
        const initialPowerProps = {items: [{
                price: 30,
                title: "1000 MV",
            }]};
        const powerComponent = shallow(<SelectPower {...initialPowerProps} />);
        const powerWrapper = powerComponent.find(Card);
        it('should have an title', () => {
            expect(powerComponent.find({className: 'boxTitle'}).text()).toEqual('Select power:');
        });
        it('should have Card component', () => {
            expect(powerComponent.find(<Card/>)).toBeTruthy();
        });
        it('power component should have p element with expected text', () => {
            expect(powerWrapper.at(0).find('p').at(0).text()).toEqual('1000 MV')
        });
        it('power component should have p element with expected text', () => {
            expect(powerWrapper.at(0).find('p').at(1).text()).toEqual('+30€')
        });
    });
    describe('<WrapDrive /> with props', () => {
        const initialDriveProps = {items: [{
                price: 100,
                title: "Yes",
            }]};
        const driveComponent = shallow(<WrapDrive {...initialDriveProps} />);
        const driveWrapper = driveComponent.find(Card);

        it('should have an title', () => {
            expect(driveComponent.find({className: 'boxTitle'}).text()).toEqual('Wrap drive:');
        });
        it('should have Card component', () => {
            expect(driveComponent.find(<Card/>)).toBeTruthy();
        });
        it('drive component should have p element with expected text', () => {
            expect(driveWrapper.at(0).find('p').at(0).text()).toEqual('Yes')
        });
        it('drive component should have p element with expected text', () => {
            expect(driveWrapper.at(0).find('p').at(1).text()).toEqual('+100€')
        });
    });
});