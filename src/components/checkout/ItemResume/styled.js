import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 16px;
`;

export const ItemDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 1px solid var(--light-gray);
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Price = styled.div`
  margin-top: 4px;
  font-size: 18px;
  color: var(--gray);
`;

export const Badge = styled.div`
  position: relative;

  &:before {
    position: absolute;
    ${(props) => ({ content: `"${props.text}"` })}
    width: 25px;
    height: 25px;
    color: white;
    border-radius: 100%;
    background-color: var(--primary-green);
    display: inline;
    text-align: center;
    white-space: pre;
    font-weight: 500;
    font-size: 18px;
    right: 4px;
    top: -8px;
  }
`;

export const Subtotal = styled.div`
  font-size: 20px;
`;
