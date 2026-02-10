// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexContainer} from "../../components/flexContainer/FlexContainer.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={"column"} align={"center"} >
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"instagram"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"mail"}/>
                    </SocialLink>
                </SocialItem>

            </SocialList>
            <Copyright>
                Madelyn Torff 2021
            </Copyright>
            </FlexContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: rgba(251, 131, 180, 0.51);
    min-height: 30vh;
`

const SocialList = styled.ul`
display: flex;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`