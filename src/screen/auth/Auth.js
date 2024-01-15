import { View, StyleSheet } from "react-native"

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
    return (
        <View style={style.container}>
            <Logo />
            <FormWrapper headerText={formName} submitText={formName} onSubmit={() => console.log("hello")} />
        </View>
    )
}