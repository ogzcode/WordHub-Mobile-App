import { View, Text, StyleSheet, Pressable } from "react-native";

import { ArrowRightSquareFill } from "../../../assets/icons/ArrowRightSquareFill";

import { color } from "../../../style/color";
import { size } from "../../../style/size";
import { border } from "../../../style/border";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: size[4],
    },
    progressContainer: {
        width: "50%",
        height: size[3],
        backgroundColor: color["rose"][100],
        position: "relative",
        borderRadius: border["rounded"]["full"],
    },
    progress: {
        height: size[3],
        backgroundColor: color.rose[500],
        borderRadius: 8,
    },
    scoreText: {
        position: "absolute",
        top: -20,
        left: 0,
        color: color.rose[500],
        fontWeight: "bold",
    },
    nextBtn: {
        width: size[12],
        height: size[12],
        backgroundColor: color["lightBlue"][100],
        borderRadius: border["rounded"]["md"],
        alignItems: "center",
        justifyContent: "center",
    },
});

export default function Header({ progressWidth, wordRate, onNextWord }) {
    return (
        <View style={styles.header}>
            <View style={styles.progressContainer}>
                <View style={[styles.progress, { width: `${progressWidth}%` }]}></View>
                <Text style={styles.scoreText}>{ wordRate }</Text>
            </View>
            <Pressable onPress={onNextWord} style={styles.nextBtn}>
                <ArrowRightSquareFill size={size[6]} color={color["lightBlue"]["500"]} />
            </Pressable>
        </View>
    );
}