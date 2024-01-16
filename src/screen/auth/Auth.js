import { View, StyleSheet } from "react-native"

import { useToast } from "../../components/toast/useToast"

import { login, signup } from "../../services/auth"

import Logo from "./components/Logo"
import FormWrapper from "./components/FormWrapper"

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        backgroundColor: "white",
    }
})

export default function Auth({ route, navigation }) {
    const { formName } = route.params;
    const toast = useToast();

    const handleLogin = async (email, password) => {
        try {
            const { error } = await login(email, password);
            if (error) throw error;
            toast.showToast("Logged in successfully", "success");
        } catch (error) {
            toast.showToast(error.message, "error");
            console.log("hello", error.message);
        }
    }

    const handleSignup = async (email, password) => {
        try {
            const { error } = await signup(email, password);
            if (error) throw error;
            toast.showToast("Account created successfully", "success");
        } catch (error) {
            toast.showToast(error.message, "error");
            console.log("hello", error);
        }
    }

    const handleSubmit = (email, password) => {
        if (formName === "Login") {
            handleLogin(email, password);
        } else {
            handleSignup(email, password);
        }
    }


    return (
        <View style={style.container}>
            <Logo />
            <FormWrapper headerText={formName} submitText={formName} onSubmit={handleSubmit} />
        </View>
    )
}