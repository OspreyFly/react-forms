import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from './Box';

test('renders without crashing', () => {
    render(<Box />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})

test('renders Box component with correct styles', () => {
 const { container } = render(<Box width={100} height={100} color="rgb(0,0,0)" />);
 const box = container.firstChild;
 expect(box).toHaveStyle({
    width: '100px',
    height: '100px',
    backgroundColor: 'rgb(0,0,0)',
 });
});
