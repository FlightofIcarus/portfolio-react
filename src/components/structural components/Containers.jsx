import styled from "styled-components";

const MainSection = styled.section`

`;

const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.mainBackgroundColor};
`;

const SubContainer = styled(MainContainer)`
    
`;

const InternalContainer = styled(MainContainer)`

`;

const SpecificContainer = styled(MainContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: auto;
    gap: 1.2rem;
`;

const LogoSpanContainer = styled.span`
    color: ${({theme}) => theme.colors.callToActionColor};
    font-size: ${({theme}) => `${theme.fonts.size.desktop.subTitle}`};

    @media (max-width: 767.9px) {
        font-size: ${({theme}) => `${theme.fonts.size.mobile.subTitle}`};
    }
`;

const Container = {
    MainSection,
    MainContainer,
    SubContainer,
    InternalContainer,
    SpecificContainer,
    LogoSpanContainer
}

export { Container };