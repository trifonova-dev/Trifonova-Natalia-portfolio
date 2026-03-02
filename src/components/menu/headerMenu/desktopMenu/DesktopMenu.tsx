import React from "react";
import {NewMenu} from "../../../../layout/header/newMenu/NewMenu.tsx";
import {S} from "./../HeaderMenu_Styles.ts"

type MenuItem = {
    title: string;
    href: string;
};

type MenuProps = {
    menuItems: MenuItem[];
};

export const DesktopMenu: React.FC<MenuProps> = ({menuItems}: MenuProps) => {
    return (
        <S.DesktopMenu>
            <NewMenu menuItems={menuItems}/>
        </S.DesktopMenu>
    );
};


