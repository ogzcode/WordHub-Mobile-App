import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { typography } from '../../../style/typography'


const style = StyleSheet.create({
    tabBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: size[1],
    },
    tabBtn: {
        flex: 1,
        paddingVertical: size[2],
        paddingHorizontal: size[4],
    },
    tabBtnActive: {
        backgroundColor: color["rose"][100],
    },
    tabBtnText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][700],
        textAlign: "center",
    },
    activeTabBtnText: {
        color: color["rose"][600]
    },
})


export const Tabs = ({ tab, onChangeTab}) => {
    return (
        <View style={style.tabBox}>
            <Pressable
                style={[style.tabBtn, tab === "example" && style.tabBtnActive]}
                onPress={() => onChangeTab("example")}
            >
                <Text style={[style.tabBtnText, tab === 'example' && style.activeTabBtnText]}>Example</Text>
            </Pressable>
            <Pressable
                style={[style.tabBtn, tab === "definition" && style.tabBtnActive]}
                onPress={() => onChangeTab("definition")}
            >
                <Text style={[style.tabBtnText, tab === 'definition' && style.activeTabBtnText]}>Definition</Text>
            </Pressable>
        </View>
    )
}