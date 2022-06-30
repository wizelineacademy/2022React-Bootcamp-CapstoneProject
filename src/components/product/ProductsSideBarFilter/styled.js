import styled from "@emotion/styled";

export const Sidebar = styled.div`
  position: absolute;
  z-index: 20;
  width: 250px;
  padding: 10px;
  left: 50%;
  transition: 0.2s;
  background-color: white;
  transform: ${(props) =>
    props.display === "true"
      ? "translateX(-50%) scale(1)"
      : "translateX(-50%) scale(0)"};

  box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.46);
  @media (min-width: 768px) {
    position: static;
    transform: translateX(-20px) scale(1);
    background-color: none;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--extralight-gray);
    border-top: 1px solid var(--extralight-gray);
    gap: 20px;
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const CloseAction = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImageContainer = styled.span`
  position: relative;
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.urlBg});
  background-size: cover;
  border-radius: 100px;

  &:after {
    position: absolute;
    border-radius: 100px;
    content: "";
    width: 100%;
    height: 100%;
    background: url("/assets/check.png") rgba(0, 0, 0, 0.4);
    background-position: center;
    background-repeat: no-repeat;
    left: 0;
    transform: scale(0);
    transition: 0.3s;
  }
`;

export const LabelInput = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: var(--gray);
  text-align: left;
  transition: 0.3s;
  padding: 10px 20px;
  border-radius: 8px;

  &:hover {
    background-color: #f2f4f5;
  }
`;

export const Input = styled("input")`
  display: none;
  &:checked ~ .checkmark:after {
    background: url("/assets/x.png") rgba(0, 0, 0, 0.4) no-repeat center;
    transform: scale(1);
  }

  &:hover ~ .checkmark:after {
    transform: scale(1);
  }
`;
