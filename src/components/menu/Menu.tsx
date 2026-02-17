// import React from 'react';

import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    );
};

export const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        
    }
    
    a{
        color: ${theme.colors.fontOne};
        font-family: 'Raleway', sans-serif;
        line-height: 1.56;
        font-size: 18px;
    }
`

