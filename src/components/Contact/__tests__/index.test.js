import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('COMPONENT: Contact', () => {

    it('renders', () => {
        render(<Contact />)
    });

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
      });

      it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('btntag')).toHaveTextContent('Submit')
      });

      it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
      })
    });
