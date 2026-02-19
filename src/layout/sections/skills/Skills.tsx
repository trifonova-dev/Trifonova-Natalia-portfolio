// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Container} from "../../../components/container/Container.tsx";

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

export const Skills = () => {
    return (
        <SkillsSection>
            <SectionTitle>Skills</SectionTitle>
            <Container>
            <IconsWrapper>
                {icons.map((icon) => (
                    <Icon key={icon.id} iconId={icon.id} height={icon.height} width={icon.width} viewBox={icon.viewBox}/>
                ))}
            </IconsWrapper>
                </Container>
        </SkillsSection>
    );
};


export const SkillsSection = styled.section`
    padding: 60px 0;


`

export const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 60px;

    justify-items: center;   /* по горизонтали */
    align-items: center;     /* по вертикали */

    svg {
        display: block;
    }
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

`;



