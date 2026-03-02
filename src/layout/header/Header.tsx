import {DesktopMenu} from "../../components/menu/desktopMenu/DesktopMenu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/container/Container.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {MobileMenu} from "../../components/menu/mobilemenu/MobileMenu.tsx";
import { S } from "./Header_Styles";
import React from "react";


// const items = ["About", "Projects", "Contact"];

const items = [
    {
        title: "About",
        href: "about",

    },

    {
        title: "Projects",
        href: "projects",

    },

    {
        title: "Contact",
        href: "contact",

    }
]




export const Header: React.FC = () => {
    return (

        <S.Header>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


