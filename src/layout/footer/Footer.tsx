import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/container/Container.tsx";
import React from "react";

import {S} from "./Footer_Styles.ts"

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.SocialList>
                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon iconId={"instagram"}/>
                            </S.SocialLink>
                        </S.SocialItem>

                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon iconId={"linkedin"}/>
                            </S.SocialLink>
                        </S.SocialItem>

                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon iconId={"mail"}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    </S.SocialList>
                    <S.Copyright>
                        Natalia Trifonova 2026
                    </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
