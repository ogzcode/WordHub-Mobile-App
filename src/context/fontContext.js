import { createContext, useContext } from "react";
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from "react-native";
import Loading from "../components/Loading";

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
        return <Loading />
    }

    return (
        <FontContext.Provider value={{}}>
            {children}
        </FontContext.Provider>
    )
}

export const useFont = () => useContext(FontContext);