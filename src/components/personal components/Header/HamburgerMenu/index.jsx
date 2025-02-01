import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";


const HambButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2.4rem;
    color: ${({theme}) => theme.colors.fontDefaultColor};`;

// 


export function HamburgerMenu({hamburgerState, setHamburgerState}) {

    return (
        <HambButton onClick={() => setHamburgerState(!hamburgerState)}>
            {!hamburgerState ? <VscMenu /> : <VscChromeClose />}
        </HambButton>
    );
};