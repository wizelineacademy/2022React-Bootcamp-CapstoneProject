import { render, screen } from '@testing-library/react';
import App from '../../App';
import {BrowserRouter as Router} from 'react-router-dom';

const setup = () => render(
  <Router>
    <App />
  </Router>
);
describe('Header test', () => {
  it('the Store logo/name appears correctly in the Header', async () => {
    setup();
    const mainImgResult = screen.getByAltText(/logo/i);
    expect(mainImgResult).toBeInTheDocument();
    const responsiveImgResult = screen.getByText(/ShopIT/i);
    expect(responsiveImgResult).toBeInTheDocument();
  });
});