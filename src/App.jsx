// import { ThemeProvider } from "styled-components";
// import { theme } from "./styles/theme";
// import {MainParagraph} from "./components/structural components/Paragraphs";
// import { Container } from "./components/structural components/Containers";
// import Header from "./components/personal components/Header/Header";
// import { useContext, useEffect, useState } from "react";
// import { ThemeActiveContext } from "./hooks/contexts/themeContext";
import ThemeActiveProvider from "./hooks/contexts/themeContext"
import Port from "./components/Port";



function App() {
  // const {themeActive} = useContext(ThemeActiveContext);
  // const darkTheme = theme.darkMode;
  // const lightTheme = theme.lightMode;

  // console.log(themeActive);
  

  return (
    <>
    <ThemeActiveProvider>
      <Port />
      {/* <ThemeProvider theme={darkTheme}>
        <Container.MainContainer>
          
          <Header />
          <MainParagraph>Olá, seja bem-vindo ao meu portfólio!</MainParagraph>
        </Container.MainContainer>
      </ThemeProvider> */}
    </ThemeActiveProvider>
    </>
  )
}

export default App
