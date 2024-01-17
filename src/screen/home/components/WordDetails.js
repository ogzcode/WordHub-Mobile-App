import React from 'react'
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'

import { VolumeUp } from '../../../assets/icons/VolumeUp'
import { Tabs } from './Tabs'
import { DefinitionSide } from './DefinitionSide'

import { filterDetails, getPhonetics } from '../../../utils/util'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: size[16],
        borderTopLeftRadius: border["rounded"]["3xl"],
        borderTopRightRadius: border["rounded"]["3xl"],
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 32,
        elevation: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: size[6],
        paddingVertical: size[2],
    },
    soundBtn: {
        borderWidth: border["width"][2],
        borderColor: color["rose"][500],
        padding: size[2],
        borderRadius: border["rounded"]["full"]
    },
    wordText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["2xl"],
        color: color["textDark"][800]
    },
    phoneticsText: {
        fontFamily: "Comfortaa-Regular",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][600]
    },
})

export default function WordDetails({ word }) {
    const phonetic = getPhonetics(word?.phonetics);
    const details = filterDetails(word?.meanings);

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View>
                    <Text style={style.wordText}>{word?.word}</Text>
                    <Text style={style.phoneticsText}>{phonetic.text}</Text>
                </View>
                <Pressable style={style.soundBtn}>
                    <VolumeUp size={24} color={color["rose"][500]} />
                </Pressable>
            </View>
            <DefinitionSide details={details} />
        </View>
    )
}