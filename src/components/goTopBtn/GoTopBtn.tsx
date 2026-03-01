import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import { animateScroll as scroll } from "react-scroll";
import {useEffect, useState} from "react";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // очистка эффекта
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={scrollToTop}>
                    <Icon iconId={"go-top"} />
                </StyledGoTopBtn>
            )}
        </>
    );
};
const StyledGoTopBtn = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: white;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        stroke: #8A8F98;      /* мягкий серый */
        stroke-width: 1.8;    /* тонкая */
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }

    &:hover svg {
        transform: translateY(-5px);
    }

`
