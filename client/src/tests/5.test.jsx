// Test if the footer comment correctly displays the provided author's name
import { render } from '@testing-library/react';
import App from './App';

test('Footer comment displays the correct author name', () => {
  const { getByText } = render(<App />);
  const footerComment = getByText(/Created by James Preston/i);
  expect(footerComment).toBeInTheDocument();
});
