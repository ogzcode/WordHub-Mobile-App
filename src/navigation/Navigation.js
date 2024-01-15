import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./stack/AuthStack";

export default function Navigation() {

    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}