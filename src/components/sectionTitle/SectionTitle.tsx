import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    color: ${theme.colors.fontOne};

    &::after {
        content: "";
        display: block;
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${theme.colors.accent};
        margin: 6px auto 70px;

    }

`