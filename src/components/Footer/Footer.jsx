import { Wrapper } from './footer.styled';

function Footer() {
  return (
    <Wrapper>
      <h5>
        <span>Ecommerce created during Wizeline’s Academy React Bootcamp</span>
        <span> - </span>
        <span>&copy; {new Date().getFullYear()}</span>
      </h5>
    </Wrapper>
  );
}

export default Footer;
