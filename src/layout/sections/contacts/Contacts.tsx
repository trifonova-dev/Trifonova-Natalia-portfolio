import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Button} from "../button/Button.tsx";
import {Container} from "../../../components/container/Container.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {S} from "./Contacts_Styles.ts";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id="contact">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper>
                    <S.Form>
                        <S.Field>Name<S.Input/></S.Field>
                        <S.Field>Email<S.Input type="email"/></S.Field>
                        <S.Field>Message<S.Textarea/></S.Field>
                        <Button absolute size="small" style={{background: theme.colors.accent}}
                                type="submit">Send</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
