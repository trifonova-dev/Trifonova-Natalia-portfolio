// import React from 'react';

import styled from "styled-components";
import {SectionTitle} from "../skills/SectionTitle.tsx";
import {Button} from "../button/Button.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <Field placeholder={"Name"}></Field>
                <Field placeholder={"Email"}></Field>
                <Field placeholder={"Message"} as={"textarea"}/>
                <Button type="submit">Send</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: rgba(123, 123, 255, 0.44);
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    
`

const Field = styled.input`

`

