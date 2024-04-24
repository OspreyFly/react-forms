import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@testing-library/jest-dom';
import Todo from './Todo';

test('renders without crashing', () => {
    render(<Todo />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})
test('renders Todo component', () => {
 const { getByText } = render(<Todo todo={{ task: 'Test Todo', id: 1 }} removeTodo={() => {}} />);
 expect(getByText('Test Todo')).toBeInTheDocument();
});
