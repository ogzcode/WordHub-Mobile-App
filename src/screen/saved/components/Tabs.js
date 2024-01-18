import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { typography } from '../../../style/typography'
import { border } from '../../../style/border'


const style = StyleSheet.create({
    tabBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: size[4],
        gap: size[4],
    },
    tabBtn: {
        flex: 1,
        paddingVertical: size[2],
        borderRadius: border["rounded"]["md"],
    },
    tabBtnText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        textAlign: "center",
    },
    exampleBtn: {
        backgroundColor: color["indigo"][100],
    },
    exampleBtnText: {
        color: color["indigo"][800],
    },
    definitionBtn: {
        backgroundColor: color["lightBlue"][100],
    },
    definitionBtnText: {
        color: color["lightBlue"][800],
    }
})


export const Tabs = ({ tab, onChangeTab}) => {
    return (
        <View style={style.tabBox}>
            <Pressable
                style={[style.tabBtn, style.exampleBtn]}
                onPress={() => onChangeTab("Sentences")}
            >
                <Text style={[style.tabBtnText, style.exampleBtnText]}>Example</Text>
            </Pressable>
            <Pressable
                style={[style.tabBtn, style.definitionBtn]}
                onPress={() => onChangeTab("Definition")}
            >
                <Text style={[style.tabBtnText, style.definitionBtnText]}>Definition</Text>
            </Pressable>
        </View>
    )
}