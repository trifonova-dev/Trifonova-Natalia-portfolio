// import React from 'react';

import styled from "styled-components";
import {SectionTitle} from "../skills/SectionTitle.tsx";
import {FlexContainer} from "../../../components/flexContainer/FlexContainer.tsx";
import {Work} from "./work/Work.tsx";
import girlImg from './../../../assets/images/girl.webp';
import markerImg from './../../../assets/images/marker.webp';
import phoneImg from './../../../assets/images/phone.webp';

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <FlexContainer direction="column">
                <Work title={"Project Name"}
                      src={girlImg}
                      text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                      reverse={true}/>
                <Work title={"Project Name"}
                      src={markerImg}
                      text={"What was your role, your deliverables, if the project was personal, freelancing."}/>
                <Work title={"Project Name"}
                      src={phoneImg}
                      text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                      reverse={true}/>
            </FlexContainer>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    padding: 80px 0;
    background: rgba(255, 234, 161, 0.61);
  
`
