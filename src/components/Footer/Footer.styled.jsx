import styled from 'styled-components';

export const FooterWrap = styled.div`
    width:100%; 
    height:200px;  
    background-color: pink; 
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    p {
        color:gray;
    }    
`;
export const Links = styled.div`
    ul {
        display:flex;
        width:100%;
        justify-content: space-evenly;
    }
    a {
        text-decoration: none;
        color:gray;
        padding: 10px;
    }
`;
 export const SocialMedia = styled.div`
 display:flex;

 a img{
    height:40px;
    margin: 10px;
}
 `;