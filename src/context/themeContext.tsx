import { createContext, useState, ReactNode, useEffect} from 'react';

export interface ThemeContextValues {
    theme: string;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextValues | null>({
    theme: 'dark', 
    toggleTheme: () => {}
});

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        console.log('theme: ', theme)
      }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}> 
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
