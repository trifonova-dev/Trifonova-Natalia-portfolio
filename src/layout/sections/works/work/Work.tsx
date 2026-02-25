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
    width: 100%;
    max-width: 992px; /* 🔴 ВАЖНО: ограничение ширины как в макете */
    margin: 0 auto;   /* 🔴 центрируем */
    align-items: stretch;
    background-color: ${theme.colors.secondaryBg};
    border-radius: 20px;
    overflow: hidden;

    margin-bottom: 80px;

    &:last-child {
        margin-bottom: 0;
    }

    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 375px) {
        flex-direction: column;
        width: 345px;            /* 🔴 ширина как в макете */
        //aspect-ratio: 345 / 526; /* 🔴 фиксируем пропорцию */
        margin-bottom: 50px;
    }
`


const InfoBlock = styled.div`
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px; /* 🔴 уменьшили паддинг для мобильных */
    }

    @media (max-width: 375px) {
        padding: 16px; /* 🔴 ещё меньше для маленьких экранов */
        padding-top: 130px;    /* 🔴 верхний отступ по макету */
        padding-bottom: 130px; /* 🔴 нижний отступ по макету */
        padding-left: 16px;    /* 🔴 боковые отступы оставляем маленькие */
    }
    
`

const Title = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: ${theme.colors.fontOne};
`

const Image = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 100%;
        aspect-ratio: 16 / 9; /* 🔴 фиксируем пропорцию */
        height: auto;       /* 🔴 авто-высота для сохранения пропорций */
    }

    @media (max-width: 375px) {
        aspect-ratio: unset;
        height: 100%;   /* 🔴 картинка занимает всю высоту блока */
    }
    

    
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

    /* 🔴 Отступ от текста сверху */
    margin-top: 24px;
`

