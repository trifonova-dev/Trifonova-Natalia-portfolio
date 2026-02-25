// import React from 'react';

import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../sections/button/Button.tsx";


export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

export const StyledMobileMenu = styled.nav`
    display: none;

    a {
        color: ${theme.colors.fontOne};
        font-family: 'Raleway', sans-serif;
        line-height: 1.56;
        font-size: 18px;
    }

    @media ${theme.media.mobile} {
        display: block;
    }

`

export const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.primaryBg};
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;

    }
`

const BurgerButton = styled(Button)<{ isOpen: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    z-index: 9999999;

    span {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 24px;
        height: 2px;

        background-color: ${theme.colors.fontThree};
        transform: translate(-50%, -50%);

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: transparent;

        `}
        
        &::before {
            content: "";
            position: absolute;
            left: 0;

            width: 24px;
            height: 2px;

            background-color: ${theme.colors.fontThree};
            transform: translateY(-8px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg);

            `}

        }

        &::after {
            content: "";
            position: absolute;
            left: 0;

            width: 24px;
            height: 2px;

            background-color: ${theme.colors.fontThree};
            transform: translateY(8px);
            

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg);

            `}
        }

    }
`



