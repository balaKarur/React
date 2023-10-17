import React,{createContext} from 'react';
import {theme} from './theme';

export const ThemeContext = createContext(theme);
type ThemeContextProviderProps = {
    children:React.ReactNode
}
export const ThemeContextProvider =({children}:ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}
