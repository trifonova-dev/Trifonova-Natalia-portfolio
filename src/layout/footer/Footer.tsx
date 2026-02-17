// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/container/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
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
                        Natalia Trifonova 2026
                    </Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 120px 0 180px;
    background-image: url("/src/assets/images/wave-footer.svg");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
`;

const SocialList = styled.ul`
    display: flex;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`
