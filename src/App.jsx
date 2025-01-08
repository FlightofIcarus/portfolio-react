import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { useState } from "react";
import {MainParagraph} from "./components/structural components/Paragraphs";
import { Container } from "./components/structural components/Containers";
import ThemeButton from "./components/personal components/ThemeButtom/ThemeButtom";
import { NavMenu } from "./components/personal components/NavMenu";



function App() {
const [themeActive, toggleThemeActive] = useState("dark");

const myTheme = themeActive === "light" ? theme.lightMode : theme.darkMode

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Container.MainContainer>
          
          <NavMenu />
          <MainParagraph>Olá, seja bem-vindo ao meu portfólio!</MainParagraph>
          <ThemeButton setThemeActive={toggleThemeActive} themeActive={themeActive}/>
        </Container.MainContainer>
      </ThemeProvider>
    </>
  )
}

export default App
