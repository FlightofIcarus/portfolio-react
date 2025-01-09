import styled from "styled-components";
import LogoComponent from "../Logo";
import { NavMenu } from "../NavMenu";
import ThemeButton from "../ThemeButtom";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.6rem 0rem;
    background-color: ${({theme}) => theme.colors.mainElementColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

function Header() {



    return(
        <HeaderContainer>
            <LogoComponent name={'Icaro Santos'} />
            <NavMenu />
            <ThemeButton />
        </HeaderContainer>
    )
};

export default Header;