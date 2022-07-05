import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: mediumslateblue;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    padding:10px;

    .img-logo {
    width:80px;
    height: 80px;
    border-radius:50px;
    display:block;
    cursor:pointer;
    }
    
`;
export const InputSearcherWrapper = styled.div`
display:flex;
 input {
display: inline;
flex-wrap: wrap;
width: 350px;
height: 39px;
box-sizing: border-box;
border: 5px;
justify-content: center;
padding-left: 10px;
font-size: 1rem;

@media (max-width: 356px){
    width: 200px;
}
 }

span {
    display: inline;
    height: 39px;
    padding: 10px;
    background-color: white;
    font-size: small;
    position:static;
    background-color: pink;
    border: 5px;
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
 display: flex;
 justify-content: center;
 align-items: center;
 align-content: center;
 position: relative;
 
 .img-icon {
    max-width: 20px;
    height: 20px;
    margin-right: 70px;
}

.icon-quantity {
width: 18px;
height: 18px;
color: black;
font-size: 12px;
text-align: center;
margin-left: -69px;
position: absolute;
bottom:20px;
right: 55px;
border-radius: 50px;
border: 1px solid gray;
background-color: pink;
}
 `;