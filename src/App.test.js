import { render, screen } from '@testing-library/react';
import App from './App';

test('should render Header correctly', () => {
  render(<App />);
  const header = screen.getByText(/Lucy's Furniture Store/i);
  expect(header).toBeInTheDocument();
});
