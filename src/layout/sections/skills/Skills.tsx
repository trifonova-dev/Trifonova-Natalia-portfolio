// import React from 'react';

import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

type SkillsPropsType = {
    iconId: string
}

export const Skills = (props: SkillsPropsType) => {
    return (
        <SkillsSection>
            <SectionH2>Skills</SectionH2>
            <FlexContainer>
                    <Icon iconId={props.iconId}/>
            </FlexContainer>
        </SkillsSection>
    );
};

export const SkillsSection = styled.section`
    background-color: rgba(253, 129, 90, 0.55);
    min-height: 100vh;
`

export const SectionH2 = styled.h2`

`

