// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import wave from "../../assets/images/wave-footer.svg"

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
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
            </FlexWrapper>
            <Wave src={wave} alt="wave" className="footer-wave" />
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: rgba(251, 131, 180, 0.51);
    padding: 60px 0 200px 0;
    position: relative;
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

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`