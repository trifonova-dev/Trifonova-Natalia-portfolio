import styled from "styled-components";

type FlexContainerPropsType = {
    justify?: string,
    wrap?: string
}

export const FlexContainer = styled.div <FlexContainerPropsType>`
    display: flex;
    flex-wrap: ${props =>props.wrap || "nowrap"};
    justify-content: ${props =>props.justify || "flex-start"};
    gap: 60px 100px;   /* расстояния как в макете */
    max-width: 1200px;
    margin: 0 auto;
    
    
`