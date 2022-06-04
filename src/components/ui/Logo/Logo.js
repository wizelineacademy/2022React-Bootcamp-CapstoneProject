import styled from "@emotion/styled";

const Logo = () => {
  const LogoContainer = styled.img`
    width: 170px;

    @media (min-width: 768px) {
      width: 200px;
    }
  `;

  return (
    <a href="/">
      <LogoContainer src="/assets/logo.webp" alt="logo" />
    </a>
  );
};

export default Logo;
