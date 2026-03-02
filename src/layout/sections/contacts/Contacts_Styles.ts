import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Contacts = styled.section`


`

const Form = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 80px;
    

`

const Field = styled.label`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    // background-color: ${theme.colors.secondaryBg};
    border-radius: 8px;
    color: ${theme.colors.fontOne};
    

`

const Input = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.inputBorderColor};
    background-color: ${theme.colors.secondaryBg};
    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 160px;
    padding-right: 140px;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid ${theme.colors.borderContact};
    background-color: ${theme.colors.secondaryBg};
    resize: none;
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
`;

export const S = {
    Contacts,
    Form,
    Field,
    Input,
    Textarea,

}