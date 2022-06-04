import styled from 'styled-components';

export const FooterWrap = styled.div`
    width:100%; 
    height:200px;  
    background-color: pink; 
    display:flex;
    justify-content: space-around;
    align-items:center;

    .links ul {
        display:flex;
        width:100%;
        justify-content: space-between;
    }
    .social-media {
        display:flex;
        

        a img{
            height:40px;
            margin: 10px;

        }
    }
    
    
`;