// import React from 'react';
import iconsSprite from './../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}



export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "70" } height={props.height || "70"}  viewBox={props.viewBox || "70"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

// export const StyledIcon = styled.svg`
//     width: 105px;
//     height: 105px;
//     display: block;
//     justify-content: center;
//     overflow: visible;
// `

// export const IconWrapper = styled.div`
//     width: 120px;
//     height: 120px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: 0.3s;
//
//     &:hover {
//         transform: scale(1.1);
//     }
// `;

