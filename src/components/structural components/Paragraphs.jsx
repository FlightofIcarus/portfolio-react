import styled from "styled-components";

const MainParagraph = styled.p`
    font-family: ${({theme}) => theme.fonts.face.principal};
    font-size: ${({theme}) => `${theme.fonts.size.desktop.paragraph}`};
    color: ${({theme}) => theme.colors.fontDefaultColor};

    @media (max-width: 767.9px) {
        font-size: ${({theme}) => `${theme.fonts.size.mobile.paragraph}`};
    }

`;

const SubParagraph = styled(MainParagraph)`

`;

export { MainParagraph, SubParagraph };