import styled from "styled-components";
import LogoComponent from "../Logo";
import { NavMenu } from "../NavMenu";
import ThemeButton from "../ThemeButtom";
import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useState } from "react";
import {Container} from '../../structural components/Containers';
import HamburgerMenuDropdown from "./HamburgerMenu/HamburgerMenuDropdown";


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.6rem 0rem;
    background-color: ${({theme}) => theme.colors.mainElementColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    overflow-y: hidden;

    @media (max-width: 1023.9px) {
        justify-content: space-between;
        padding: 1.6rem 1.2rem;
    }
`;

function Header() {
    const [isMobileScreen, setIsMobileScreen] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.screen.width < 1024 ? setIsMobileScreen(true) : setIsMobileScreen(false);
        });

        return () => {
            window.removeEventListener('resize', () => {
                window.screen.width < 1024 ? setIsMobileScreen(true) : setIsMobileScreen(false);
            });
        }
        
    }, [window.screen.width]);

    return(
        <>
            <HeaderContainer>
                <LogoComponent name={'Icaro Santos'} />
                <Container.SpecificContainer>
                    {isMobileScreen ? <HamburgerMenu hamburgerState={isMenuOpen} setHamburgerState={setIsMenuOpen}/> : <NavMenu />}
                    <ThemeButton />
                </Container.SpecificContainer>
            </HeaderContainer>
            <HamburgerMenuDropdown hamburgerState={isMenuOpen} />
        </>
    )
};

export default Header;