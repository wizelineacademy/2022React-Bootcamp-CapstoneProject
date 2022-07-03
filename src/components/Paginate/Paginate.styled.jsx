import styled from 'styled-components';

export const PaginateContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 100%;
min-width: 392px;
height: 100px;
background: gainsboro;
color: white;
font-size: 1rem;
padding-top: 40px;

span {
    display: block; 
    align-items: center;
    padding: 0 12px;
    color:black;
    width: 30px;
    cursor: pointer;
    :hover{
        box-shadow:0 0 40px 40px  slateblue inset;
    }
}
`;