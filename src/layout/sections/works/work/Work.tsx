import {S} from "./Work_Styled.ts"
import React from "react";

type WorkPropsType = {
    title: string,
    text: string,
    src: string,
    reverse?: boolean


}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work id="projects" reverse={props.reverse}>
            <S.Image src={props.src}/>
            <S.InfoBlock>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Link href={"#"}>View Project</S.Link>
            </S.InfoBlock>


        </S.Work>
    );
};
