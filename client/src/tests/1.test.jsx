// Test 1: Check if Home Route renders HomePage

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/App.jsx'; // adjust path as needed

test('renders HomePage when visiting root route', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText('Home Content')).toBeInTheDocument();  // assuming 'Home Content' is some unique text within HomePage component
});