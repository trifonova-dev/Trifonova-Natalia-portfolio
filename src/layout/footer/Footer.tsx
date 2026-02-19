// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/container/Container.tsx";
import {theme} from "../../styles/Theme.ts";

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
    background-color: ${theme.colors.secondaryBg};
`;

const SocialList = styled.ul`
    display: flex;
    justify-content: center; /* центрируем иконки */
    align-items: center;
    gap: 24px;               /* расстояние между иконками */
    list-style: none;        /* убрать маркеры */
    padding: 0;
    margin: 0;


`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    display: flex;
    color: ${theme.colors.fontOne};
    justify-content: center; /* центрируем по горизонтали */
    align-items: center; /* центрируем по вертикали */
    max-width: 40px;  /* фикс размеры для точного gap */
    max-height: 40px;

    &:hover {
        color: ${theme.colors.fontTwo};
    }
`

const Copyright = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontTwo};
`
