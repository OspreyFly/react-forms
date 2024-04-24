// TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

test('renders without crashing', () => {
    render(<TodoList />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

test('adds a new todo', () => {
 const { queryByText, getByText } = render(<TodoList />);
 const input = getByText("Add a new task");
 const btn = getByText("Add");
 expect(queryByText('Walk the dog')).not.toBeInTheDocument();
 fireEvent.change(input, { target: { value: 'Walk the dog' }});
 fireEvent.click(btn);
 expect(queryByText('Walk the dog')).toBeInTheDocument();
});
