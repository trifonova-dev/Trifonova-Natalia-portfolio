// import React from 'react';
import iconsSprite from './../../assets/images/icons-sprite.svg'
// import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: number,
    height?: number,
    viewBox?: string,
}



export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120" } height={props.height || "120"}  viewBox={props.viewBox || "130"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

