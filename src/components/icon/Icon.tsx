// import React from 'react';
import iconsSprite from './../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    widht?: string,
    height?: string,
}



export const Icon = (props: IconPropsType) => {
    return (
        <IconWrapper>
        <StyledIcon width={props.widht || "70" } height={props.height || "70"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </StyledIcon>
            </IconWrapper>
    );
};

export const StyledIcon = styled.svg`
    width: 105px;
    height: 105px;
    display: block;
    justify-content: center;
    //overflow: visible;
`

export const IconWrapper = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`;

