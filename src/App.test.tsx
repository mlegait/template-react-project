import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dummy App', () => {
  render(<App />);
  const dummyText = screen.getByText(/Insert code here/i);
  expect(dummyText).toBeInTheDocument();
});
