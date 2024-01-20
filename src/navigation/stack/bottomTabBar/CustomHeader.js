import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';

import { Gear } from '../../../assets/icons/Gear';

import { color } from '../../../style/color';
import { typography } from '../../../style/typography';
import { size } from '../../../style/size';

const style = StyleSheet.create({
    headerBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: size["16"],
        paddingHorizontal: size["4"],
        paddingTop: size["4"],
        paddingBottom: size["2"],
        backgroundColor: color["rose"][500],
    },
    routeText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["xl"],
        color: color["white"],
    },
})

export const CustomHeader = ({ navigation, route }) => {
    return (
        <View style={style.headerBox}>
            <Text style={style.routeText}>{route.name}</Text>
            <Pressable onPress={() => navigation.navigate("Settings")}>
                <Gear size={24} color={color["white"]} />
            </Pressable>
        </View>
    )
}
