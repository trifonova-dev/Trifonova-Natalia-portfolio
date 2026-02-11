// import React from 'react';

import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp"
// import {FlexContainer} from "../../../components/flexContainer/FlexContainer.tsx";
import { Button } from "../button/Button.tsx";


export const Main = () => {
    return (
        <StyledMain>
            {/*<Container>*/}
            {/*    <FlexWrapper justify="space-between" >*/}
                    <StyledMainInfo>
                        <Title>Software Developer</Title>
                        <Name>Hello, my name is Natalia Trifonova</Name>
                        <Description>Short text with details about you, what you do or your professional career. You can add more
                            information on the about page.</Description>
                        <Button>Projects</Button>
                        <Button>LinkedIn</Button>
                    </StyledMainInfo>
                    <Photo src={photo}/>
            {/*    </FlexWrapper>*/}
            {/*</Container>*/}

        </StyledMain>

    );
};

export const StyledMain = styled.main`
    min-height: 100vh;
    align-items: center;
    background-color: rgba(83, 250, 235, 0.6);

`
export const StyledMainInfo = styled.div`
    background-color: rgba(188, 248, 70, 0.57);
    max-width: 508px;
    max-height: 408px;
`

export const Title = styled.h1`

`
export const Name = styled.p`

`
export const Description = styled.p`
`


export const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    margin-left: auto;

`

