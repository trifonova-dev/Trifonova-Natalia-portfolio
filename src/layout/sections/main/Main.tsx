// import React from 'react';
import photo from './../../../assets/images/girl.webp'
// import mask from './../../../assets/images/mask.svg'

import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {Container} from "../../../components/container/Container.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between">
                    <StyledMainInfo>
                        <Title>Software Developer</Title>
                        <Name>Hello, my name is Natalia Trifonova</Name>
                        <Description>Short text with details about you, what you do or your professional career. You can
                            add more
                            information on the about page.</Description>
                        <Button>Projects</Button>
                        <Button>LinkedIn</Button>
                    </StyledMainInfo>

                    <PhotoWrapper>
                        <svg width="0" height="0">
                            <defs>
                                <mask id="triangle">
                                    <path d="M426.755 0.660905C526.01 5.37687 630.416 42.2627 691.019 119.058C747.053 190.064 709.403 290.888 725.408 379.114C738.276 450.044 786.302 512.961 775.404 584.204C763.332 663.132 724.842 738.452 662.532 790.186C597.271 844.368 510.835 889.895 426.755 873.671C345.261 857.947 319.875 754.823 250.249 710.635C174.069 662.287 41.2528 688.785 6.43092 606.913C-27.6816 526.71 83.9568 456.257 106.308 372.209C131.067 279.108 79.6084 166.633 143.094 93.0241C208.865 16.7636 324.689 -4.1886 426.755 0.660905Z" fill="white"/>
                                </mask>
                            </defs>
                        </svg>
                        <Photo src={photo} alt="hero" />
                    </PhotoWrapper>
                </FlexWrapper>

            </Container>
        </StyledMain>

    );
};

export const StyledMain = styled.section`
    min-height: 100vh;
    align-items: center;
    background-color: rgba(83, 250, 235, 0.6);
    ${FlexWrapper} {
        position: relative;
    }
`


export const StyledMainInfo = styled.div`
    background-color: rgba(188, 248, 70, 0.57);
    max-width: 508px;
    max-height: 408px;
    position: relative;
    z-index: 1;
    margin-top: 110px;
`

export const Title = styled.h1`

`
export const Name = styled.p`

`
export const Description = styled.p`
`

const PhotoWrapper = styled.div`
    position: absolute;
    right: -177px;
    top: -248px;
`


export const Photo = styled.img`
    width: 775px;
    height: 880px;
    object-fit: cover;
    mask-image: url(#triangle);
    -webkit-mask: url(#triangle);
    mask-size: cover;
    background-color: yellow;
    mask-repeat: no-repeat;
    mask-position: left bottom;
`



