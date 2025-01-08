import styled from "styled-components";

export const MainTitle = styled.h1`

`;

export const SubTitle = styled.h2`
display: inline-block;
    color: ${({theme}) => theme.colors.fontDefaultColor};
    font-family: ${({theme}) => theme.fonts.face.titles};
    font-size: ${({theme}) => `${theme.fonts.size.desktop.subTitle}`};

    @media screen and (max-width: 767.9px) {
        font-size: ${({theme}) => `${theme.fonts.size.mobile.subTitle}`};
    }
`;