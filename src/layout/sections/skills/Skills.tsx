
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Container} from "../../../components/container/Container.tsx";
import Tilt from "react-parallax-tilt";
import {S} from "./Skills_Styles.ts"
import React from "react";

const icons = [

    {
        id: "vscode",
        width: 112,
        height: 112,
        viewBox: "0 0 120 120",
    },

    {
        id: "javascript",
        width: 120,
        height: 120,
        viewBox: "0 0 120 120",
    },

    {
        id: "css",
        width: 120,
        height: 119,
        viewBox: "0 0 120 119",
    },

    {
        id: "html",
        width: 120,
        height: 120,
        viewBox: "0 0 120 120",
    },

    {
        id: "greensock",
        width: 120,
        height: 120,
        viewBox: "0 0 120 120",
    },

    {
        id: "redux",
        width: 105,
        height: 99,
        viewBox: "0 0 105 99",
    },

    {
        id: "git",
        width: 110,
        height: 105,
        viewBox: "0 0 110 105",
    },

    {
        id: "github",
        width: 105,
        height: 105,
        viewBox: "0 0 110 110",
    },

    {
        id: "react",
        width: 113,
        height: 101,
        viewBox: "0 0 113 101",
    },

     {
       id: "sass",
        width: 117,
        height: 87,
        viewBox: "0 0 117 87",
    },

    {
        id:  "bootstrap",
        width: 87,
        height: 87,
        viewBox: "0 0 87 87",
    },

    {
        id:  "tailwind",
        width: 131,
        height: 131,
        viewBox: "0 0 131 131",
    },

];

export const Skills: React.FC = () => {
    return (
        <S.SkillsSection>
            <SectionTitle>Skills</SectionTitle>
            <Container>
            <S.IconsWrapper>
                {icons.map((icon) => (
                    <Tilt
                        key={icon.id}
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        perspective={1000}
                        transitionSpeed={1200}
                        scale={1.2}
                        gyroscope={false}
                    >
                     <Icon iconId={icon.id}
                          height={icon.height}
                          width={icon.width}
                          viewBox={icon.viewBox}
                     />
                    </Tilt>
                ))}
            </S.IconsWrapper>
                </Container>
        </S.SkillsSection>
    );
};

