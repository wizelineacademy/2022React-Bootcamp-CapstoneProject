import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  padding: 20px 12px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  background-color: var(--primary-green);
  color: white;
  align-items: center;
`;

const FooterContent = styled.div`
  font-size: 18px;
  font-weight: 400;
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
