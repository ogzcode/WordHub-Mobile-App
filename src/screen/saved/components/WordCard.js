import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native'
import { useDispatch } from 'react-redux'

import { setSelectedWordAndTab, deleteWord } from '../../../store/slice/wordSlice'
import useAudio from '../../../hooks/useAudio'

import { VolumeUp } from '../../../assets/icons/VolumeUp'
import { BookmarkFill } from '../../../assets/icons/BookmarkFill';
import { PlusLarge } from '../../../assets/icons/PlusLarge'
import { ThreeDotsVertical } from '../../../assets/icons/ThreeDotsVertical'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'
import { Tabs } from './Tabs'

const style = StyleSheet.create({
    container: {
        zIndex: 10,
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
        alignItems: "center",
        paddingHorizontal: size[4],
        paddingVertical: size[2],
        position: "relative"
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
        backgroundColor: color["white"],
        padding: size[3],
        borderRadius: border["rounded"]["md"],
        position: "absolute",
        top: 0,
        right: size[16],
        gap: size[3],
        shadowColor: color["black"],
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: size[4],
        elevation: 2,
        opacity: 1
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
    },
    plusBtn: {
        backgroundColor: color["teal"][500],
        padding: size[2],
        borderRadius: border["rounded"]["full"]
    },
    dropdownBtn: {
        padding: size[2],
        borderRadius: border["rounded"]["full"],
        backgroundColor: color["backgroundDark"][100]
    }
})

export default function WordCard({ word, onOpenNewSentencesDialog }) {
    const { playSound } = useAudio(word?.phonetics?.audio || null)
    const [visible, setVisible] = React.useState(false)
    const dispatch = useDispatch()
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleTab = (tab) => {
        dispatch(setSelectedWordAndTab({ word, tab }))
    }

    const handleDeleteWord = () => {
        dispatch(deleteWord(word.id))
    }

    const handleShow = () => {
        if (visible) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => setVisible(false));
        } else {
            setVisible(true);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View>
                    <Text style={style.wordText}>{word?.word}</Text>
                    <Text style={style.phoneticsText}>{word?.phonetics?.text || ""}</Text>
                </View>
                <Pressable onPress={handleShow} style={style.dropdownBtn}>
                    <ThreeDotsVertical size={28} color={color["backgroundDark"][600]} />
                </Pressable>
                <Animated.View
                    style={[
                        style.btnBox,
                        {
                            opacity: fadeAnim, // Bind opacity to animated value
                        },
                    ]}
                >
                    <Pressable onPress={() => onOpenNewSentencesDialog()} style={style.plusBtn}>
                        <PlusLarge size={28} color={color["white"]} />
                    </Pressable>
                    <Pressable onPress={() => handleDeleteWord()} style={[style.bookmarkBtn, style.bookmarkActive]}>
                        <BookmarkFill size={18} color={color["white"]} />
                    </Pressable>
                    <Pressable onPress={() => playSound()} style={style.soundBtn}>
                        <VolumeUp size={24} color={color["rose"][500]} />
                    </Pressable>
                </Animated.View>

            </View>
            <Tabs onChangeTab={handleTab} />
        </View>
    )
}