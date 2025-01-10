import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const defaultContextValues: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(defaultContextValues);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {   
        setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
    };    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
