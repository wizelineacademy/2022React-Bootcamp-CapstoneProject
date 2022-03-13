import styled from "styled-components";

const LoaderStyled = styled.div`
    display: flex;
    justify-content: center;
    .loader {
        width: 22ch;
        animation: typing 3.5s steps(22), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        font-family: monospace;
        font-size: 2rem;
    }

    @keyframes typing {
        from {
            width: 0
        }
    }
        
    @keyframes blink {
        50% {
            border-color: transparent
        }
    }
`

export const Loader = () => {
    return (
        <LoaderStyled>
            <p className="loader">Loading</p>
        </LoaderStyled>
    )
}