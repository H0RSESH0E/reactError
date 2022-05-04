import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('COMPONENT: <Nav />', () => {
    // base test
    test('renders', () => {
        render(<Nav />);
    });

    it('^^^ Matches Snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('COMPONENT: <Nav /> -- emoji can be seen', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });

describe('links are visible', () => {
    test('is text inserted into links', () => {
        //arrange
        const { getByTestId } = render(<Nav />);

        //assert
        expect(getByTestId('test-link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('test-about')).toHaveTextContent('About me');
    })
})
})