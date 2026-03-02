import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import React from "react";
import {NewMenu} from "../../../layout/header/newMenu/NewMenu.tsx";

type MenuItem = {
    title: string;
    href: string;
};

type MenuProps = {
    menuItems: MenuItem[];
};

export const DesktopMenu: React.FC<MenuProps> = ({ menuItems }: MenuProps) => {
    return (
        <StyledDesktopMenu>
            <NewMenu menuItems={menuItems} />
        </StyledDesktopMenu>
    );
};

export const StyledDesktopMenu = styled.nav`
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

