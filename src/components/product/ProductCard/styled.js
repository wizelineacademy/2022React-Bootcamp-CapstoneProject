import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: relative;
  background-color: #f2f4f5;
  padding: 10px;
  height: 490px;
  border-radius: 5px;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--primary-green);
    top: 0px;
    left: 0px;
    z-index: -1;
    opacity: 0;
    transition: all ease-in-out 0.2s;
  }

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--gray);
    bottom: 0;
    right: 0;
    opacity: 0;
    z-index: -1;
    transition: all ease-in-out 0.2s;
  }

  &:hover:before {
    top: -10px;
    left: -10px;
    opacity: 1;
  }

  &:hover:after {
    bottom: -10px;
    right: -10px;
    opacity: 1;
  }
`;

export const CardHeader = styled.div`
  background-color: #f2f4f5;
  position: relative;
  height: 300px;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const CategoryLabel = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 400;
  position: absolute;
  font-size: 18px;
  top: 5px;
  left: 5px;
`;

export const CardBody = styled.div`
  position: relative;
  height: 180px;
  padding: 18px 22px;
`;

export const CardName = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  color: var(--dark-green);
  font-weight: 400;
  font-size: 22px;
`;

export const CardPrice = styled.p`
  color: var(--gray);
  font-weight: 400;
  font-size: 18px;
  position: absolute;
  bottom: 15px;
`;
