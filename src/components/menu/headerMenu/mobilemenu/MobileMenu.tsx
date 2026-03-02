
import React, {useState} from "react";
import {NewMenu} from "../../../../layout/header/newMenu/NewMenu.tsx";
import  {S} from "./../HeaderMenu_Styles.ts"

type MenuItem = {
    title: string;
    href: string;
};

type MobileMenuProps = {
    menuItems: MenuItem[];
};


export const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems }: MobileMenuProps) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen);
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setmenuIsOpen(false)}>
                <NewMenu menuItems={menuItems} />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
