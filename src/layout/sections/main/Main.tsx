// import React from 'react';
import photo from './../../../assets/images/girl.webp'
// import mask from './../../../assets/images/mask.svg'

import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {Container} from "../../../components/container/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
// import {SmallMask} from "./SmallMask.tsx";
// import {BigMask} from "./BigMask.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between" wrap={"wrap-reverse"}>
                    <StyledMainInfo>
                        <Title>Software Developer</Title>
                        <Name>Hello, my name is Natalia Trifonova</Name>
                        <Description>Short text with details about you, what you do or your professional career. You can
                            add more
                            information on the about page.</Description>
                        <ButtonWrapper>
                            <Button size="normal" style={{background: theme.colors.accent}}>Projects</Button>
                            <Button bordered>LinkedIn</Button>
                        </ButtonWrapper>
                    </StyledMainInfo>
                    <PhotoWrapper>
                        {/*<BigMask/>*/}
                        {/*<SmallMask/>*/}
                        <Photo src={photo} alt="hero"/>
                    </PhotoWrapper>
                </FlexWrapper>

            </Container>
        </StyledMain>

    );
};

export const StyledMain = styled.section`
    min-height: 100vh;
    align-items: center;

    ${FlexWrapper} {
        position: relative;
    }
`


export const StyledMainInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 508px;
    max-height: 408px;
    position: relative;
    z-index: 1;
    margin-top: 110px;
    gap: 32px;
`

export const Title = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.accent};

`
export const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 64px;
    font-weight: 700;
    line-height: 1.2;
    color: ${theme.colors.fontTextName};

`


export const Description = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.colors.fontTwo};

`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;`

const PhotoWrapper = styled.div`
    position: absolute;
    right: -177px;
    top: -248px;

    width: 775px;
    height: 880px;

    -webkit-mask-image: url("/mask.svg");
    mask-image: url("/mask.svg");

    -webkit-mask-size: contain;
    mask-size: contain;

    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;

    -webkit-mask-position: left bottom;
    mask-position: left bottom;
    
    
    @media ${theme.media.mobile} {
        position: relative;
        right: 0;
        top: 0;

        width: 100%;
        max-width: 375px;
        height: 450px;

        -webkit-mask-image: url("/small-mask.svg");
        mask-image: url("/small-mask.svg");

        -webkit-mask-position: center bottom;
        mask-position: center bottom;
    }
    
`;


export const Photo = styled.img`
    //width: 775px;
    //height: 880px;
    //object-fit: cover;
    //mask-image: url(#bigMask);
    //-webkit-mask: url(#bigMask);
    //mask-size: cover;
    //background-color: yellow;
    //mask-repeat: no-repeat;
    //mask-position: left bottom;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;


`;



