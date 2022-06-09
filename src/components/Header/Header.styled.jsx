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

 export const ProfileWrapper = styled.div`
 width:200px;
 display:flex;
 align-items: center;
 justify-content: space-evenly;

 .user-icon {
    padding:10px;
    @media (max-width: 768px) {
        display: none;
    }
}
.user-name {
    margin-right: 80px;
    @media (max-width: 768px) {
        display: none;
    }
}
`;

 export const CartWrapper = styled.div`
 .img-icon {
    max-width: 20px;
    height: 20px;
    margin-right: 70px;
}
 `;