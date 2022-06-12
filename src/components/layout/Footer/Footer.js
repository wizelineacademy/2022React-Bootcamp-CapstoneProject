import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  padding: 20px 12px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  background-color: #171717;
  color: white;
  align-items: center;
`;

const FooterContent = styled.div`
  font-size: 15px;
  font-weight: 400;

  @media (min-width: 588px) {
    font-size: 18px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        &#169; Ecommerce created during Wizeline’s Academy React Bootcamp
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
