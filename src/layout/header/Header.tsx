// import React from 'react';

import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {NameLink} from "../../components/namelink/NameLink.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <NameLink/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: pink;
    display: flex;
    justify-content: space-between;
`

