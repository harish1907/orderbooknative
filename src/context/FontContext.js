import React, {createContext} from 'react'
import { useFonts } from 'expo-font';

export const FontContext = createContext();

export const FontContextProvider = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../Fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../Fonts/Roboto-Regular.ttf'),
    });

    return (
        <FontContext.Provider value={{
            fontsLoaded,
        }}>
            {children}
        </FontContext.Provider>
    )
}
