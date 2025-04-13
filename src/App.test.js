// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders event registration form', () => {
  render(<App />);
  const headingElement = screen.getByText(/Event Registration/i);
  expect(headingElement).toBeInTheDocument();
});