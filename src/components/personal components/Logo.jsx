import { Logo } from "../structural components/Image";
import { SubTitle } from "../structural components/Titles";
import {Container} from "../structural components/Containers";
import logo from "/logo.png";
import logo2 from "/logo2.png";

function Image({isDarkMode}) {
    const imgPath = isDarkMode === 'dark' ? logo : logo2;
    return(
    <Logo src={imgPath} alt={'Logomarca Desenvolvedor Icaro Santos. Esfera branca com um I em forma de pena e um S.'} width={43} />
    )
};

function Name({children}) {
    return(
    <Container.LogoSpanContainer>
        {'{ '}<SubTitle>{children}</SubTitle>{' }'}
    </Container.LogoSpanContainer>
    )
};

export default function LogoComponent({name, isDarkMode}) {
    return (
        <Container.SpecificContainer>
            <Image isDarkMode={isDarkMode}/>
            <Name>{name}</Name>
        </Container.SpecificContainer>
    )
};

export const LogoMarca = {
    Container: Container.SpecificContainer,
    Image,
    Name
};