import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an image with src attribute', () => {
  render(<App />);
  const image = screen.getByAltText('logo');//to find the image in the screen
  expect(image.src).toContain('http://localhost/logo-fur.jpg');
  expect(image.className).toContain('img-logo');
});
