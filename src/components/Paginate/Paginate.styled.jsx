import styled from 'styled-components';

export const PaginateContainer = styled.div`
display: flex;
 align-items: center;
 justify-content: center;
 max-width: 560px;
 min-width: 392px;
 height: 60px;
 background: gainsboro;
 color: white;
 font-size: 16px;

span {
    display: block; 
    align-items: center;
    color:black;
    width: 30px;
    cursor: pointer;
    :hover{
        box-shadow:0 0 40px 40px slateblue inset;
    }
}
`;