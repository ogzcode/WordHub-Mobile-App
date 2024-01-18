import React from 'react';
import { Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import NoDataSVG from '../../../assets/svgComponents/NoDataSVG';

import { color } from '../../../style/color';
import { size } from '../../../style/size';
import { typography } from '../../../style/typography';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["xl"],
        color: color["gray"][700],
        marginTop: size[4],
    }
})

export default function NoData() {
    return (
        <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <NoDataSVG width={size[56]} height={size[56]} />
            <Text style={style.text}>Word not found !</Text>
        </KeyboardAvoidingView>
    )
}