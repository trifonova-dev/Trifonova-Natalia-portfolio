import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Roboto"};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.2};
    color: ${color || theme.colors.fontOne};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);


`