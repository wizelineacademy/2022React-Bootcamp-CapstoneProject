import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    min-width: ${({theme}) => theme.coreSpace * 6}px;
    min-height: ${({theme}) => theme.coreSpace * 6}px;
    border-radius: ${({theme}) => theme.coreSpace}px;

    ${({type}) => {
        switch (type) {
            case 'transparent': 
                return `
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    text-shadow: 0px 0px 8px black,
                `;
            default:
                return ``;
        }
    }};
`;

const Button = ({children, ...props}) => {
    return(
        <StyledButton
            {...props}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button;