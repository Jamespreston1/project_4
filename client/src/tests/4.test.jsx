// Test if the table container is rendered and contains a table element
import { render } from '@testing-library/react';
import App from './App';

test('Table container is rendered with a table', () => {
  const { container } = render(<App />);
  const table = container.querySelector('.table-container table');
  expect(table).toBeInTheDocument();
});
