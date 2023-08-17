// Test if the initial state of filter is an empty string
import { render } from '@testing-library/react';
import App from './App';

test('Initial state of filter is empty', () => {
  const { getByPlaceholderText } = render(<App />);
  const filterInput = getByPlaceholderText('Filter by...');
  expect(filterInput.value).toBe('');
});
