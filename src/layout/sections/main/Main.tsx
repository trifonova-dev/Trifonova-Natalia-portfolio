
import photo from './../../../assets/images/girl.webp'
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {Container} from "../../../components/container/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import Typewriter from "typewriter-effect";
import React from "react";
import {S} from "./Main_Styles.ts"



export const Main: React.FC = () => {
    return (
        <S.Main id="about">
            <Container>
                <FlexWrapper justify="space-between" wrap={"wrap-reverse"}>
                    <S.MainInfo>
                        <S.Title>Software Developer</S.Title>
                        <S.Name>Hello, my name is Natalia Trifonova</S.Name>
                        <S.Name>
                        </S.Name>
                        <S.Description>
                            <Typewriter
                                options={{
                                    strings: ['Short text with details about you, what you do or your professional career. You can\n' +
                                    'add more\n' + 'information on the about page.'],
                                    autoStart : true,
                                    loop: true,
                                    delay: 40,
                                }}/>
                            </S.Description>
                        <S.ButtonWrapper>
                            <Button size="normal" style={{background: theme.colors.accent}}>Projects</Button>
                            <Button bordered>LinkedIn</Button>
                        </S.ButtonWrapper>
                    </S.MainInfo>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="hero"/>
                    </S.PhotoWrapper>
                </FlexWrapper>

            </Container>
        </S.Main>

    );
};
