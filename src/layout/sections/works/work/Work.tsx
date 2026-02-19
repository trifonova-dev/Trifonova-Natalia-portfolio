// import React from 'react';

import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

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
    background-color: ${theme.colors.secondaryBg};
    width: 992px;
    height: 524px;
    margin: 0 auto 80px;
    border-radius: 20px;
    overflow: hidden;

    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
`



const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 992px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
    width: 406px;
    height: 232px;
    margin-left: 50px;

`

const Title = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: ${theme.colors.fontOne};
`

const Image = styled.img`
    width: 496px;
    height: 524px;
    object-fit: cover;
`

const Text = styled.p`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.fontTwo};
`

const Link = styled.a`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.5;
    color: ${theme.colors.fontOne};
    display: inline-block;
    text-decoration: none;
    border: 1px solid ${theme.colors.fontOne};
    border-radius: 24px;
    padding-block: 8px;
    padding-inline: 24px;
    width: 150px;
    height: 43px;
`

