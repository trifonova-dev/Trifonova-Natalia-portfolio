import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string,
    wrap?: string
    direction?: string,
    align?: string

}

export const FlexWrapper = styled.div <FlexWrapperPropsType>`
    display: flex;

    flex-wrap: ${props =>props.wrap || "nowrap"};
    justify-content: ${props =>props.justify || "flex-start"};
    flex-direction: ${props =>props.direction || "row"};
    align-items: ${props =>props.align};
  
`