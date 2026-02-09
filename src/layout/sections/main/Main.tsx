// import React from 'react';

import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer justify="space-between">
                <StyledMainInfo>
                    <MainH1>Software Developer</MainH1>
                    <Name>Hello, my name is Natalia Trifonova</Name>
                    <Description>Short text with details about you, what you do or your professional career. You can add more
                        information on the about page.</Description>

                    <ButtonOne>Projects</ButtonOne>
                    <ButtonTwo>LinkedIn</ButtonTwo>
                </StyledMainInfo>
                <Photo src={photo}/>
            </FlexContainer>
        </StyledMain>

    );
};

export const StyledMain = styled.main`
    min-height: 100vh;
    background-color: rgba(83, 250, 235, 0.6);

`
export const StyledMainInfo = styled.div`
    background-color: rgba(188, 248, 70, 0.57);
`

export const MainH1 = styled.h1`

`
export const Name = styled.p`

`
export const Description = styled.p`
`

export const ButtonOne = styled.button`
    
`
export const ButtonTwo = styled.button`
    
`

export const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;


`

