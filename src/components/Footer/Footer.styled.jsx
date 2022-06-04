import styled from 'styled-components';

export const FooterWrap = styled.div`
    width:100%; 
    height:200px;  
    background-color: pink; 
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    
    p {
        color:gray;
    }

    .links ul {
        display:flex;
        width:100%;
        justify-content: space-between;
        
        a {
            text-decoration: none;
            color:gray;
        }
    }
    .social-media {
        display:flex;
        
        a img{
            height:40px;
            margin: 10px;
        }
    }
    
`;