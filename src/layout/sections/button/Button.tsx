import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

// import {theme} from "../../../styles/Theme.ts";

interface ButtonProps {
    size?: "normal" | "small";  // размер кнопки
    bordered?: boolean; // граница кнопки
    absolute?: boolean; // передвигаем кнопку в нижний правый угол формы

}


export const Button = styled.button<ButtonProps>`

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding-block: 8px;
    padding-inline: 24px;
    cursor: pointer;
    border-radius: 8px;

    ${props => props.absolute &&
            `
      position: absolute;
      right: 0px;
      bottom: 16px;
     
    `} 

    width: ${({size}) => (size === "small" ? "89px" : "115px")};
    height: 43px; //если props small,то кнопка будет маленькой, если props normal или не передан, то кнопка будет большой


    border: ${({bordered}) =>
            bordered ? `2px solid ${theme.colors.fontOne}` : "none"};
    

`