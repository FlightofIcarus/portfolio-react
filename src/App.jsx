import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { useState } from "react";
import {MainParagraph} from "./components/structural components/Paragraphs";
import { Container } from "./components/structural components/Containers";
import { NavMenu } from "./components/personal components/NavMenu";



function App() {
const [themeActive, toggleThemeActive] = useState("dark");

const myTheme = themeActive === "light" ? theme.lightMode : theme.darkMode
const toggleTheme = () => {
  toggleThemeActive(themeActive === "light" ? "dark" : "light");  
};

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Container.MainContainer>
          
          <NavMenu />
          <MainParagraph>Olá, seja bem-vindo ao meu portfólio!</MainParagraph>
          <button onClick={toggleTheme}>Mudar Tema</button>
        </Container.MainContainer>
      </ThemeProvider>
    </>
  )
}

export default App
