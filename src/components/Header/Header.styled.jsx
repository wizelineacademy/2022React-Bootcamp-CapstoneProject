import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: mediumslateblue;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    .lupa-button {
        max-width: 100px;
        margin-left:-150px;
        height: 39px;
        background: white;
        border: 0;
        justify-content: flex-start;
        @media (max-width: 768px) {
            margin-left:0px;
        }
    }
    .img-logo {
    width:80px;
    height: 80px;
    border-radius:50px;
    display:block;
    cursor:pointer;

    }
`;
export const InputSearcher = styled.input`
width: 500px;
height: 39px;
box-sizing: border-box;
border: 0;
margin-left: 20px;
@media (max-width: 768px) {
    width: 450px;
}
`;

 export const ProfileWrapper = styled.div`
 width:150px;
 display:flex;
 align-items: center;
 justify-content: space-around;

 .user-icon {
     margin-left:150px;
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