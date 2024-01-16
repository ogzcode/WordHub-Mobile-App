import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "../context/authContext";

import AuthStack from "./stack/AuthStack";
import MainStack from "./stack/MainStack";

import Toast from "../components/toast/Toast";

const Stack = createStackNavigator();

export default function Navigation() {
    const { session } = useAuth();

    return (
        <NavigationContainer>
            {
                session === null || session?.data?.session === null
                    ? <AuthStack />
                    : <MainStack />
            }
            <Toast />
        </NavigationContainer>
    );
}