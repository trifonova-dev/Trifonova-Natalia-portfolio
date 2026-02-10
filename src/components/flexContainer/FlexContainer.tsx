import styled from "styled-components";

type FlexContainerPropsType = {
    justify?: string,
    wrap?: string
    direction?: string

}

export const FlexContainer = styled.div <FlexContainerPropsType>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: ${props =>props.wrap || "nowrap"};
    justify-content: ${props =>props.justify || "flex-start"};
    flex-direction: ${props =>props.direction || "row"};
  
`