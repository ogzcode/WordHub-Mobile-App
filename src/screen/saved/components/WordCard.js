import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { setSelectedWordAndTab } from '../../../store/slice/wordSlice'
import useAudio from '../../../hooks/useAudio'

import { VolumeUp } from '../../../assets/icons/VolumeUp'
import { BookmarkFill } from '../../../assets/icons/BookmarkFill'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'
import { Tabs } from './Tabs'

const style = StyleSheet.create({
    container: {
        backgroundColor: color["white"],
        marginHorizontal: size[6],
        marginBottom: size[6],
        borderWidth: border["width"][1],
        borderColor: color["borderDark"][400],
        borderRadius: border["rounded"]["md"],
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: size[4],
        paddingVertical: size[2],
    },
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
    btnBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: size[2]
    },
    soundBtn: {
        borderWidth: border["width"][2],
        borderColor: color["rose"][500],
        padding: size[2],
        borderRadius: border["rounded"]["full"]
    },
    bookmarkBtn: {
        borderWidth: border["width"][2],
        borderColor: color["indigo"][500],
        padding: size[3],
        borderRadius: border["rounded"]["full"]
    },
    bookmarkActive: {
        backgroundColor: color["indigo"][500]
    }
})

export default function WordCard({ word }) {
    const { playSound } = useAudio(word?.phonetic?.audio || null)
    const dispatch = useDispatch()

    const handleTab = (tab) => {
        dispatch(setSelectedWordAndTab({ word, tab }))
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View>
                    <Text style={style.wordText}>{word?.word}</Text>
                    <Text style={style.phoneticsText}>{word?.phonetics?.text || ""}</Text>
                </View>
                <View style={style.btnBox}>
                    <Pressable onPress={() => console.log()} style={[style.bookmarkBtn, style.bookmarkActive]}>
                        <BookmarkFill size={18} color={color["white"]} />
                    </Pressable>
                    <Pressable onPress={() => playSound()} style={style.soundBtn}>
                        <VolumeUp size={24} color={color["rose"][500]} />
                    </Pressable>
                </View>
            </View>
            <Tabs onChangeTab={handleTab} />
        </View>
    )
}