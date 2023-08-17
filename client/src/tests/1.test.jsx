// Test if the SearchPage component renders without crashing (since using external data on data.js, will fail tests)
import { render } from '@testing-library/react';
import App from './App';

test('Renders SearchPage component', () => {
  render(<App />);
});
