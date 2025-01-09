import { useState, createContext } from "react";


export const ThemeActiveContext = createContext({});

function ThemeActiveProvider({children}) {
    const [themeActive, toggleThemeActive] = useState("dark");

    return(
        <ThemeActiveContext.Provider value={{themeActive, toggleThemeActive}}>
            {children}
        </ThemeActiveContext.Provider>
    )
}

export default ThemeActiveProvider;