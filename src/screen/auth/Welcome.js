import { View, Text, StyleSheet, Pressable } from "react-native"
import WelcomeSVG from "../../assets/SvgComponents/WelcomeSVG"

import { color } from "../../style/color"
import { typography } from "../../style/typography"
import { border } from "../../style/border"
import { size } from "../../style/size"

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: size["8"],
        justifyContent: "center",
        backgroundColor: "white"
    },
    welcomeText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["3xl"],
        color: color["textLight"][800],
        textAlign: "center",
    },
    content: {
        fontFamily: "Comfortaa-Regular",
        fontSize: typography["fontSizes"]["md"],
        color: color["textLight"][700],
        textAlign: "center",
    }, 
    btnFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: size["10"],
        gap: size["6"],
    },
    authBtn: {
        flex: 1,
        backgroundColor: color["rose"][500],
        padding: size["2"],
        borderRadius: border["rounded"]["md"],
    },
    authBtnText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        color: color["white"],
        textAlign: "center",
    }
})

export default function Welcome({ navigation }) {

    const handleNavigate = (screen) => {
        navigation.navigate("Auth", { formName: screen})
    }
    return (
        <View style={style.container}>
            <WelcomeSVG width={360} height={360} />
            <Text style={style.welcomeText}>Welcome</Text>
            <Text style={style.content}>
                Join us for a fun and effective way to learn new words and practice your sentences.
                Sign up or log in to get started.
            </Text>
            <View style={style.btnFooter}>
                <Pressable onPress={() => handleNavigate("Sign up")} style={style.authBtn}>
                    <Text style={style.authBtnText}>Sign up</Text>
                </Pressable>
                <Pressable onPress={() => handleNavigate("Login")} style={style.authBtn}>
                    <Text style={style.authBtnText}>Log in</Text>
                </Pressable>
            </View>
        </View>
    )
}