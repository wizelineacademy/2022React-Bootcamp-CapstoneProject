import styled from 'styled-components';
import Logo from '../Assets/companyLogo.png';

const HeaderContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(62,62,62,255);
        color: white;
        padding: 0.5rem 0;
        margin: 0;

        section{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    `;

const ImageContainer = styled.div`
padding: 0 1.5rem;
    img{
        width: 4rem;
        &:hover{
            cursor: pointer;
        }
    }
`;

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 8rem;

    form{
        padding: 0 0.7rem;

        input{
            height: 2rem;
            width: 40rem;
            padding: 0 0.5rem;
            border-radius: 5px 0 0 5px;
            border-style: none;
            text-align: right;
        }
    }
`;

const CartContainer = styled.div`
    padding: 0 2rem;

    i{
        font-size: 1.5rem;
    }

    &:hover{
        cursor: pointer;
    }
`;


const ButtonSearch = styled.button`
    height: 2rem;
    width: 3rem;
    border-style: none;
    border-radius: 0 5px 5px 0;
    background-color: #febd69;

    &:hover{
        cursor: pointer;
    }
`;

const Header = () => {

    return (
        <HeaderContainer>
            <ImageContainer><img src={Logo} alt="company logo" /></ImageContainer>
            <section>
                <SearchBarContainer>
                    <form>
                        <input type="text" name="search" id="search" />
                        <ButtonSearch type='submit'>
                            <i class="fa-solid fa-magnifying-glass" />
                        </ButtonSearch>
                    </form>
                </SearchBarContainer>
                <CartContainer><i class="fa-solid fa-cart-shopping" /></CartContainer>
            </section>
        </HeaderContainer>
    );
}

export default Header;