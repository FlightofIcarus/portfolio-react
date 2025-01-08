import { LuSunMoon, LuSun  } from "react-icons/lu";
import styled from "styled-components";

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
  };

function ThemeButton({setThemeActive, themeActive}) {
    return (
        <ThemeButtonStyled onClick={() => toggleTheme(setThemeActive, themeActive)}>
            {themeActive === "light" ? <LuSunMoon /> : <LuSun />}
        </ThemeButtonStyled>
    )
}

export default ThemeButton;