import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Button} from "../button/Button.tsx";
import {Container} from "../../../components/container/Container.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {S} from "./Contacts_Styles.ts";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs
            .sendForm('service_pt6uuj7', 'template_p6mf8v9', form.current, {
                publicKey: 'jFdu0yUCfVHYSxZWh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contacts id="contact">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field>
                            Name<S.Input required name={"name"}/>
                        </S.Field>
                        <S.Field>
                            Email<S.Input required type="email" name={"subject"}/>
                        </S.Field>
                        <S.Field>
                            Message<S.Textarea required name={"message"}/>
                        </S.Field>
                        <Button absolute size="small" style={{background: theme.colors.accent}}
                                type="submit">Send</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
