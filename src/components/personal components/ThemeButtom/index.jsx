import { useContext } from "react";
import { LuSunMoon, LuSun  } from "react-icons/lu";
import styled from "styled-components";
import { ThemeActiveContext } from "../../../hooks/contexts/themeContext";

const ThemeButtonStyled = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({theme}) => theme.colors.fontDefaultColor};
    font-size: ${({theme}) => theme.fonts.size.desktop.emphasis};

    @media (max-width: 767.9px){
        font-size: ${({theme}) => theme.fonts.size.mobile.emphasis};
    }
    `;

const toggleTheme = (setThemeActive, themeActive) => {
    setThemeActive(themeActive === "light" ? "dark" : "light");
    console.log(themeActive);
      
  };

function ThemeButton() {
    const {themeActive, toggleThemeActive} = useContext(ThemeActiveContext);
    return (
        <ThemeButtonStyled onClick={() => toggleTheme(toggleThemeActive, themeActive)}>
            {themeActive === "light" ? <LuSunMoon /> : <LuSun />}
        </ThemeButtonStyled>
    )
}

export default ThemeButton;