import { createContext, useContext } from "react";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from "react-native";
import { color } from "../style/color";
import { size } from "../style/size";

const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const [loaded] = useFonts({
        "Comfortaa-Light": require('../assets/fonts/Comfortaa-Light.ttf'),
        "Comfortaa-Regular": require('../assets/fonts/Comfortaa-Regular.ttf'),
        "Comfortaa-Medium": require('../assets/fonts/Comfortaa-Medium.ttf'),
        "Comfortaa-SemiBold": require('../assets/fonts/Comfortaa-SemiBold.ttf'),
        "Comfortaa-Bold": require('../assets/fonts/Comfortaa-Bold.ttf'),
    });

    if (!loaded) {
        return <ActivityIndicator size={size[16]} color={color["rose"]["500"]}/>;
    }

    return (
        <FontContext.Provider value={{}}>
            {children}
        </FontContext.Provider>
    )
}

export const useFont = () => useContext(FontContext);