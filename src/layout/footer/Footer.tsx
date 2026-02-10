// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialIconList>
                <SocialIconLink>
                    <Icon iconId={"css"}/>
                </SocialIconLink>
            </SocialIconList>
            <Copyright>
                Madelyn Torff 2021
            </Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`

const SocialIconList = styled.ul`

`
const SocialIconLink = styled.a`

`

const Copyright = styled.small`
    
`