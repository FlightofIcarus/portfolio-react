import styled from "styled-components";

const NavMenuContainer = styled.ul`
    display: flex;
    gap: 12px;
    width: fit-content;
    padding: 8px;
`;

const NavMenuItem = styled.li`
    font-size: ${({theme}) => theme.fonts.size.desktop.navLink};
    color: ${({theme}) => theme.colors.fontDefaultColor};
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.elementHoverColor};
    }

    @media (max-width: 768px) {
        font-size: ${({theme}) => theme.fonts.size.mobile.navLink};
    }
`;

const NavMenuItemLink = styled.a`

`;

export { NavMenuContainer, NavMenuItem, NavMenuItemLink };