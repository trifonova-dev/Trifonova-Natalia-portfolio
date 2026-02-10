// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "./SectionTitle.tsx";

const icons = [
    "vscode",
    "javascript",
    "css",
    "html",
    "redux",
    "git",
    "github",
    "react",
    "sass",
    "tailwind"
];

export const Skills = () => {
    return (
        <SkillsSection>
            <SectionTitle>Skills</SectionTitle>
            <IconsWrapper>
                {icons.map((icon: string) => (
                    <Icon key={icon} iconId={icon}/>
                ))}
            </IconsWrapper>
        </SkillsSection>
    );
};

export const SkillsSection = styled.section`
    background-color: rgba(253, 129, 90, 0.55);
    padding: 60px 0;


`

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    max-width: 800px;   /* ограничиваем ширину */
    margin: 0 auto;     /* центрируем */

`;



