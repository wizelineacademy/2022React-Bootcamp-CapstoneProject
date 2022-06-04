import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    max-width: 100%;
    height:100px;
    background-color: mediumslateblue;
    display:flex;
    justify-content: space-around;
    align-items: center;
    
    input {
        width: 600px;
        height: 39px;
        box-sizing: border-box;
        border-radius: 2px;
    }

    .img-logo {
    width:100%;
    height:90px;
    border-radius:50px;
    display:block;
    }

    nav {
        width:200px;
        display:flex;
        align-items: center;
        justify-content: space-around;
        
    }
    .img-icon {
        max-width: 20px;
        height: 20px;
        margin-right: 20px;
    }
`;