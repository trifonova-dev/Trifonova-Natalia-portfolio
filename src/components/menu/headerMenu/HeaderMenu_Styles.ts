import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
// import {Button} from "react-scroll";
// import {Button} from "../../../../layout/sections/button/Button.tsx";

//Desktop Menu//

export const DesktopMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        
    }
    
    a{
        color: ${theme.colors.fontOne};
        font-family: 'Raleway', sans-serif;
        line-height: 1.56;
        font-size: 18px;
        
        :hover{
            cursor: pointer;
            
        }
    }
    
    @media ${theme.media.mobile}{
    display: none;
}
`


//Mobile MENU//


export const MobileMenu = styled.nav`
    //display: none;

    a {
        color: ${theme.colors.fontOne};
        font-family: 'Raleway', sans-serif;
        line-height: 1.56;
        font-size: 18px;
        
    }

    // @media ${theme.media.tablet} {
    //     display: block;
    // }

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

const BurgerButton = styled.button<{ isOpen: boolean }>`
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



export const S = {
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu
}