// import React from 'react';

import styled from "styled-components";

type WorkPropsType = {
    title: string,
    text: string,
    src: string,
    reverse?: boolean


}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork reverse={props.reverse}>
            <Image src={props.src}/>
            <InfoBlock>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>View Project</Link>
            </InfoBlock>


        </StyledWork>
    );
};

const StyledWork = styled.div<{ reverse?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 80px;

    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
`
const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 992px;
    
`

const Title = styled.h3`

`
const Image = styled.img`
    width: 496px;
    height: 524px;
    object-fit: cover;
`

const Text = styled.p`

`

const Link = styled.a`

`

