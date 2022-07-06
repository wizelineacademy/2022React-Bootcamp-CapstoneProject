import ChevronRight from "./../../icons/ChevronRight";
import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrentImage = styled.div`
  width: 100%;
  user-select: none;
  position: relative;
  margin-bottom: 0;

  @media (min-width: 768px) {
    width: 500px;
  }

  img {
    width: 100%;
  }
`;

export const GridImage = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 100px);
  width: 100%;
  grid-gap: 10px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const Image = styled.div`
  position: relative;
  img {
    position: relative;
    z-index: 10;
  }

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 11;
    background: ${(props) => (props.current === "true" ? "#a1c5ccc1" : "none")};
    transition: 1s;
  }
`;

export const Arrow = styled(ChevronRight)`
  position: absolute;
  border-radius: 50%;
  color: var(--primary-green);
  font-weight: 400;
  width: 34px;
  height: 34px;
  cursor: pointer;
  transition: all ease 0.5s;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Next = styled(Arrow)`
  top: 50%;
  transform: translateY(-50%);
  right: 1px;
  @media (min-width: 588px) {
    right: 20px;
  }
`;

export const Prev = styled(Arrow)`
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  left: 2px;
  @media (min-width: 588px) {
    left: 20px;
  }
`;
