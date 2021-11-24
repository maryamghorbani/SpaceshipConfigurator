import React from 'react';
import { shallow } from 'enzyme';
import Receipt from 'src/Components/Receipt';

describe('Receipt tests', () => {
    test('renders Receipt-total', () => {
        const items = [ 100, 200, 300];
        const total = shallow(<Receipt items={items} />);
        // Expect the wrapper object to be defined
        expect(total.toEqual(600));
    });
});