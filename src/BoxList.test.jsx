import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders without crashing', () => {
    render(<BoxList />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

test('adds a new box', () => {
    const { queryByPlaceholderText, queryByText } = render(<BoxList />);
    const width = queryByPlaceholderText("Width");
    const height = queryByPlaceholderText("Height");
    const bgColor = queryByPlaceholderText("Background Color");
    const btn = queryByText("Add Box");
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.change(width, { target: { value: 100 }});
    fireEvent.change(height, { target: { value: 100 }});
    fireEvent.change(bgColor, { target: { value: 'rgb(255,255,255)' }});
    fireEvent.click(btn);
    expect((queryByText("X"))).toBeInTheDocument();
   });
