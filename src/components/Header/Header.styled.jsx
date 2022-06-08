import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: mediumslateblue;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    
    .img-logo {
    width:80px;
    height: 80px;
    border-radius:50px;
    display:block;
    }
`;
export const InputSearcher = styled.input`
width: 600px;
height: 39px;
box-sizing: border-box;
border-radius: 2px;
margin-left: 10px;
`;

export const IconWrapper = styled.nav`
width:200px;
display:flex;
align-items: center;
justify-content: space-evenly;

.user-name {
    margin-right: 20px;
    @media (max-width: 768px) {
        display: none;
    }
}
.user-icon {
    margin-left: 20px;
    @media (max-width: 768px) {
        display: none;
    }
}
.img-icon {
    max-width: 20px;
    height: 20px;
    margin-right: 40px;
}
`;