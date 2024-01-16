import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { size } from '../../../style/size';
import { color } from '../../../style/color';
import { typography } from '../../../style/typography';
import { border } from '../../../style/border';

const style = StyleSheet.create({
    headerBox: {
        position: "absolute",
        top: size["12"],
        flexDirection: "row",
        alignItems: "center",
        gap: size["2"],
    },
    logoImage: {
        width: size["12"],
        height: size["12"],
    },
    appNameBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: size["1"],
    },
    appNameText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["xl"],
        color: color["textLight"][800],
    },
    hubText: {
        color: color["white"],
        backgroundColor: color["rose"][500],
        paddingHorizontal: size["1"],
        paddingVertical: 0,
        borderRadius: border["rounded"]["md"],
        fontSize: typography["fontSizes"]["lg"],
    }
})

export default function Logo() {
    return (
        <View style={style.headerBox} >
            <Image style={style.logoImage} source={require("../../../assets/images/logo.png")} />
            <View style={style.appNameBox}>
                <Text style={style.appNameText}>Word</Text>
                <Text style={[style.appNameText, style.hubText]}>hub</Text>
            </View>
        </View >
    )
}