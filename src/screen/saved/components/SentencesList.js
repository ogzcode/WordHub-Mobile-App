import React, { useState } from 'react'
import { StyleSheet, ScrollView, Pressable, Text, View } from 'react-native'

import { Trash } from '../../../assets/icons/Trash'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'

const styles = StyleSheet.create({
    container: {
        padding: size[4],
        paddingBottom: size[0],
    },
    item: {
        paddingVertical: size[3],
        paddingHorizontal: size[4],
        borderRadius: border["rounded"]["md"],
        borderWidth: border["width"][2],
        borderColor: color["rose"][400],
        marginBottom: size[4],
    },
    itemText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][800],
    },
    selected: {
        backgroundColor: color["rose"][400],
    },
    selectedBox: {
        padding: size[4],
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    selectedText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        color: color["indigo"][600],
        paddingVertical: size[2],
        paddingHorizontal: size[4],
        backgroundColor: color["indigo"][100],
        borderRadius: border["rounded"]["full"],
    },
    deleteBtn: {
        padding: size[3],
        borderRadius: border["rounded"]["full"],
        backgroundColor: color["red"][100],
    }
})

export default function SentencesList({ sentences, onDeleteSentences }) {
    const [selectedSentence, setSelectedSentence] = useState([])

    const handleLongPress = (sentence) => {
        if (selectedSentence.includes(sentence)) {
            setSelectedSentence(selectedSentence.filter(item => item !== sentence))
            return
        }

        setSelectedSentence([...selectedSentence, sentence]);
    }

    const isSelected = (sentence) => {
        return selectedSentence.includes(sentence)
    }

    const handlePress = (sentence) => {
        if (selectedSentence.length > 0) {
            handleLongPress(sentence)
            return
        }
    }

    return (
        <>
            {
                selectedSentence.length > 0 &&
                <View style={styles.selectedBox}>
                    <Text style={styles.selectedText}>Selected: {selectedSentence.length}</Text>
                    <Pressable onPress={() => onDeleteSentences(selectedSentence)} style={styles.deleteBtn}>
                        <Trash size={size[5]} color={color["red"]["500"]} />
                    </Pressable>
                </View>
            }
            <ScrollView style={styles.container}>
                {
                    sentences.length === 0 &&
                    <Text style={styles.itemText}>No sentences</Text>
                    
                }
                {
                    sentences.map((item, index) =>
                        <Pressable
                            onLongPress={() => handleLongPress(item)}
                            onPress={() => handlePress(item)}
                            style={[styles.item, isSelected(item) && styles.selected]}
                            key={index}
                        >
                            <Text
                                style={[styles.itemText,
                                { color: isSelected(item) ? color.white : color["textDark"][800] }
                                ]}
                            >
                                {item}
                            </Text>
                        </Pressable>)
                }
            </ScrollView></>
    )
}