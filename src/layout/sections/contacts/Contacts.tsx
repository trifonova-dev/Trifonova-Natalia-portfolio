// import React from 'react';

import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Button} from "../button/Button.tsx";
import {Container} from "../../../components/container/Container.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper>
                    <StyledForm>
                        <Field>Name<Input/></Field>
                        <Field>Email<Input type="email"/></Field>
                        <Field>Message<Textarea/></Field>
                        <Button absolute size="small" style={{background: theme.colors.accent}}
                                type="submit">Send</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: ${theme.colors.secondaryBg};

`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    background-color: ${theme.colors.secondaryBg};
    border-radius: 8px;
    color: ${theme.colors.fontOne};
    

`

const Input = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.borderContact};
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
    border: 1px solid ${theme.colors.borderContact};
    background-color: ${theme.colors.secondaryBg};
    resize: none;
    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
`;

