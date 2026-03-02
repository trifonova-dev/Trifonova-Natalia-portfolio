import styled from "styled-components";


export const SkillsSection = styled.section`
    padding: 60px 0;


`

export const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 60px;

    justify-items: center;   /* по горизонтали */
    align-items: center;     /* по вертикали */

    
    
    svg {
        display: block;
        transition: filter 0.3s ease; /* плавный переход фильтра */

        &:hover {
            filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.15));
        }
        
    }
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }    

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

`;

 export const S = {
    SkillsSection,
    IconsWrapper,
}
