import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { color } from '../../../style/color';
import { size } from '../../../style/size';
import { typography } from '../../../style/typography';
import { border } from '../../../style/border';

const styles = StyleSheet.create({
    topBox: {
        flex: 1,
        gap: 8,
        backgroundColor: color.rose[500],
        borderRadius: border.rounded["lg"],
        alignItems: 'center',
        justifyContent: 'center',
    },
    letterBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 8,
    },
    box: {
        width: size[12],
        height: size[12],
        margin: size[1],
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: border.rounded.md,
    },
    letter: {
        fontSize: typography.fontSizes.xl,
        color: color.rose[500],
        fontFamily: "Comfortaa-Bold",
    },
});


export default function TopBox({ wordLength, selectedWord }) {
    return (
        <View style={styles.topBox}>
            <View style={styles.letterBox}>
                {
                    [...Array(wordLength)].map((_, index) => (
                        <View key={index} style={styles.box}>
                            <Text style={styles.letter}>{
                                selectedWord[index]?.letter.toUpperCase() || ""
                            }</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}