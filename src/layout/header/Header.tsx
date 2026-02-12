// import React from 'react';

import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {NameLink} from "../../components/namelink/NameLink.tsx";
import {Container} from "../../components/container/Container.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";

export const Header = () => {
    return (

        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between">
                    <NameLink/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: pink;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

