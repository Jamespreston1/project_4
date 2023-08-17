// Test if the Filter by Ticker button is rendered on the page
import { render } from '@testing-library/react';
import App from './App';

test('Filter by Ticker button is rendered', () => {
  const { getByText } = render(<App />);
  const filterByTickerButton = getByText('Filter by Ticker');
  expect(filterByTickerButton).toBeInTheDocument();
});
