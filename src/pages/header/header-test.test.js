import { render, screen } from '@testing-library/react';
import Header from './Header';

const setup = () => render(<Header />);
describe('Header', () => {
  it('the Ecommerce Store logo/name appears correctly in the Header', async () => {
    setup();
    const mainImgResult = screen.getByAltText(/logoEccomerce/i);
    expect(mainImgResult).toBeInTheDocument();
    const responsiveImgResult = screen.getByAltText(/logoResponsive/i);
    expect(responsiveImgResult).toBeInTheDocument();
  });
});
