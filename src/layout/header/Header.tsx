import {DesktopMenu} from "../../components/menu/headerMenu/desktopMenu/DesktopMenu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/container/Container.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {MobileMenu} from "../../components/menu/headerMenu/mobilemenu/MobileMenu.tsx";
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

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {

        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>

                    {width < breakpoint ?  <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/> }

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


