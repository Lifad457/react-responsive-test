import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    justify-content: center;

    @media screen and (min-height: 1200px) {
        flex-direction: column;
        margin-top: 380px;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        margin-top: unset;
    }
`
export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 700px;

    @media screen and (max-width: 1200px) {
        display: none;
    }

    @media screen and (min-height: 1200px) {
        display: flex;
    }
`
export const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 0 5rem;
    color: var(--clr-primary);
    text-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
    max-width: 1120px;

    @keyframes text-fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            transition: opacity 1000ms ease-in-out;
        }
    }
    animation: text-fade .7s ease-in-out;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        line-height: 1.3;
    }

    h3 {
        font-size: 1.5rem;
        text-align: justify;
        font-weight: var(--fw-medium);
    }

    @media screen and (max-width: 1500px) {
        padding: 2.5rem;
        line-height: 1.4;

        h1 {
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: 1.1rem;
        }
    }

    @media screen and (max-height: 915px) {
        padding: 2.5rem;
        line-height: 1.4;

        h1 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: 1rem;
        }
    }

    @media screen and (max-height: 750px) {
        padding: 2.5rem;
        line-height: 1.4;

        h1 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: .8rem;
        }
    }

    @media screen and (max-height: 400px) {
        padding: 2.5rem;
        line-height: 1.3;

        h1 {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: .7rem;
        }
    }
`
export const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: var(--clr-primary);
    background-color: transparent;
    margin-top: 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--clr-primary);
    padding: 0.7rem 1.1rem;
    cursor: pointer;
    
    span {
        font-size: 1.3rem;
    }

    transition: 0.3s ease-in-out;
    &:hover {
        background-color: rgba(255, 255, 128, .1);
    }

    @media screen and (max-width: 1500px) {
        span {
            font-size: 1rem;
        }
    }

    @media screen and (max-height: 915px) {
        margin-top: 2rem;
        span {
            font-size: .8rem;
        }
    }

    @media screen and (max-height: 400px) {
        margin-top: 2rem;
        padding: .2rem .8rem;
        span {
            font-size: .7rem;
        }
    }
`
const myFadeOut = keyframes`
    from {
        transform: rotate(${props => props.$index}deg);
    }
    to {
        transform: rotate(-20deg) translateX(-500px);
        opacity: 0;
    }
`
const myFadeIn = keyframes`
    from {
        transform: rotate(-20deg) translateX(-500px);
        opacity: 0;
    }
    to {
        transform: rotate(${props => props.$index}deg);
        opacity: 1;
    }
`
const animation = props =>
    props.$faded ?
        css`${myFadeIn} .7s ease-out` : css`${myFadeOut} .7s ease-out`

export const Wrapper = styled.div`
    position: absolute;
    min-width: 400px;
    min-height: 600px;
    border-radius: 1.2rem;
    background-image: url(${props => props.$photo});
    background-size: cover;
    box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.5);
    background-color: #333;
    transform: rotate(${props => props.$index}deg);
    z-index: ${props => props.$index};
    animation: ${animation};
    animation-fill-mode: forwards;
    border: 10px solid whitesmoke;
`