// import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('COMPONENT: <About />', () => {
    //First Test
    test('renders', () => {
        render(<About />);
    });


    //Second Testu
    it('**** Matches Snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })

})