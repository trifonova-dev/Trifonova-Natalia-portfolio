// import React from 'react';

import styled from "styled-components";
import {FlexContainer} from "../../../components/flexContainer/FlexContainer.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionH2} from "./SectionH2.tsx";

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
            <SectionH2>Skills</SectionH2>
            <FlexContainer wrap={"wrap"} justify={"center"}>
                {icons.map((icon) => (
                    <Icon key={icon} iconId={icon} />
                ))}
            </FlexContainer>
        </SkillsSection>
    );
};

export const SkillsSection = styled.section`
    background-color: rgba(253, 129, 90, 0.55);
    justify-content: center;
    width: 1200px;
    height: 519px;
    display: flex;
    gap: 20px;
    margin: 0 auto;
    flex-direction: column;  /* ВАЖНО */
    align-items: center;     /* центр по горизонтали */

`



