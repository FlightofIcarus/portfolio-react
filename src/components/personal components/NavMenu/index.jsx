import {NavMenuContainer, NavMenuItem, NavMenuItemLink} from "./NavMenuStructuralComponents";
import { menuItens } from "../../../data/menuItens";

function NavMenu() {
    return (
        <NavMenuContainer>
            {menuItens.map((item)=> (
                <NavMenuItemLink key={item.id} href={item.url}>
                    <NavMenuItem key={item.id}>{item.nome}</NavMenuItem>
                </NavMenuItemLink>
            ))}
        </NavMenuContainer>
    )
}

export {NavMenu}