import {menuItens} from '../../../../../data/menuItens';
import { NavMenuContainer, NavMenuItem, NavMenuItemLink } from "../../../NavMenu/NavMenuStructuralComponents";
import styled from "styled-components";


const HambMenuContainer = styled(NavMenuContainer)`
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
width: 100vw;
margin-bottom: 2rem;
`;

const HambMenuItem = styled(NavMenuItem)`
`;

const HambMenuItemLink = styled(NavMenuItemLink)`
    line-height: 3.4rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.fontDefaultColor};
    width: 100%;
    text-align: center;

    &:first-child {
        padding-top: 0.8rem;
    }
`;

function HamburgerMenuDropdown({hamburgerState}) {
    return (
        <>{hamburgerState ? <HambMenuContainer>{menuItens.map((item)=> (<HambMenuItemLink key={item.id} href={item.url}><HambMenuItem key={item.id}>{item.nome}</HambMenuItem></HambMenuItemLink>))}</HambMenuContainer> : null}</>
    )
};

export default HamburgerMenuDropdown;