import { View, Text, Pressable, StyleSheet } from "react-native"

import GameSVG from "../../../assets/svgComponents/GameSVG"

import { size } from "../../../style/size"
import { typography } from "../../../style/typography"
import { color } from "../../../style/color"

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color["white"]
    },
    content: {
        fontSize: typography["fontSizes"]["xl"],
        fontFamily: "Comfortaa-Medium",
        textAlign: "center",
        marginVertical: size[4],
        color: color["textDark"][900],
    },
    startBtn: {
        backgroundColor: color["rose"][500],
        paddingVertical: size[3],
        paddingHorizontal: size[6],
        borderRadius: size[2],
    },
    startBtnText: {
        fontSize: typography["fontSizes"]["md"],
        fontFamily: "Comfortaa-Bold",
        color: color["white"],
    }
})

export default function StartScreen ({ onStartGame }) {
    return (
        <View style={style.container}>
            <GameSVG width={size[72]} height={size[72]} />
            <Text style={style.content}>Get started now and improve your vocabulary!</Text>
            <Pressable onPress={onStartGame} style={style.startBtn}>
                <Text style={style.startBtnText}>Start Game</Text>
            </Pressable>
        </View>
    )
}