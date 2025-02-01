import Header from "./personal components/Header/Header";
import { Container } from "./structural components/Containers";
import { ThemeProvider } from "styled-components";
import { MainParagraph } from "./structural components/Paragraphs";
import { theme } from "../styles/theme";
import { ThemeActiveContext } from "../hooks/contexts/themeContext";
import { useContext } from "react";

function Port() {

    const {themeActive} = useContext(ThemeActiveContext);
    const darkTheme = theme.darkMode;
    const lightTheme = theme.lightMode;

    return(
    <ThemeProvider theme={themeActive === "light" ? lightTheme : darkTheme}>
        <Container.MainContainer>
          
          <Header />
          <MainParagraph>Olá, seja bem-vindo ao meu portfólio!</MainParagraph>
        </Container.MainContainer>
    </ThemeProvider>
    )
};

export default Port;