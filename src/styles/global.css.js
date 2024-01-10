import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
        --fw-black: 900;
        --clr-primary: whitesmoke;
    }

    html, body {
        line-height: 1.4;
        font-family: var(--ff-primary);
    }

    body {
        background-color: #6c85d4;
        background-image: url(${props => props.$photo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        overflow: hidden;
    }
`
export default GlobalStyle