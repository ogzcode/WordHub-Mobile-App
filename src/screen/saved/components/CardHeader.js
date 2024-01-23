import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { ThreeDotsVertical } from '../../../assets/icons/ThreeDotsVertical';

import { color } from '../../../style/color';
import { size } from '../../../style/size';
import { border } from '../../../style/border';
import { typography } from '../../../style/typography';

const style = StyleSheet.create({
    wordText: {
        fontSize: typography["fontSizes"]["xl"],
        fontFamily: "Comfortaa-Bold",
        color: color["gray"][700],
    },
    phoneticsText: {
        fontSize: typography["fontSizes"]["sm"],
        color: color["gray"][500],
        fontFamily: "Comfortaa-Regular"
    },
    dropdownBtn: {
        padding: size[2],
        borderRadius: border["rounded"]["full"],
        backgroundColor: color["backgroundDark"][100]
    }
})


export default function CardHeader({ word, phoneticText, onShowDropdown}) {
    return (
        <>
            <View>
                <Text style={style.wordText}>{word}</Text>
                <Text style={style.phoneticsText}>{phoneticText || ""}</Text>
            </View>
            <Pressable onPress={onShowDropdown} style={style.dropdownBtn}>
                <ThreeDotsVertical size={28} color={color["backgroundDark"][600]} />
            </Pressable>
        </>
    )
}