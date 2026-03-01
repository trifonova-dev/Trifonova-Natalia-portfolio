import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/container/Container.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {MobileMenu} from "../../components/menu/mobilemenu/MobileMenu.tsx";
import styled from "styled-components";


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

        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <Menu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`