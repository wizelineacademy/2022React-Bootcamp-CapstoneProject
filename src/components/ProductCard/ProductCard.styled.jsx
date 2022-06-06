import styled from 'styled-components';


export const ProductHolder = styled.div`
  box-shadow: 1px -1px 20px 0px rgb(0 0 0 / 30%);

  .imgHolder{
  	height: clamp(160px,20vw,300px);
  	width: 100%;

    
    .mainImg{
    	opacity: 1;
    }
    .secondImg{
    	opacity: 0;
    }

    :hover{
      .mainImg{
      	opacity: 0;
      }
      .secondImg{
      	opacity: 1;
      }
    }
  }

  .wishBtn{
  	width: 50px;
  	padding: 0;

  	svg{
  	  width: 60%;
  	  height: 60%;
  	}

  	.wish{
       opacity: 1;
  	}
    .wishFill{
       opacity: 0;
    }
    :hover{
    	.wish{
           opacity: 0;
  	    }
        .wishFill{
           opacity: 1;
        }
    }
  }

  .moreBtn{
  	width: calc(100% - 70px);
  } 

 
`;