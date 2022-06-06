import { render, screen } from '@testing-library/react';
import App from './App';

test('is loading messages visible at beggining', () => {
  render(<App />);
  
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});


test('is logo visible after loading applicaiton', () => {
  render(<App />);

  const wait = async () => {
    await new Promise((timeout) => setTimeout(timeout, 1000));
  };
  wait().then(() => {
    const logoImage = screen.getByAltText('Test-store');
    expect(logoImage).toBeInTheDocument();
  });
});