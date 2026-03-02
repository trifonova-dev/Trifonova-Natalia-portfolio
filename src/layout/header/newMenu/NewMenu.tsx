import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";


type MenuItem = {
    title: string;
    href: string;
};

type MenuProps = {
    menuItems: MenuItem[];
};

export const NewMenu: React.FC<MenuProps> = ({ menuItems }: MenuProps) => {
    return (
        <ul>
            {menuItems.map((item) => (
                <li key={item.href}>
                    <a href={`#${item.href}`}>{item.title}</a>
                </li>
            ))}
        </ul>
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
    
    @media ${theme.media.mobile}{
    display: none;
}
`