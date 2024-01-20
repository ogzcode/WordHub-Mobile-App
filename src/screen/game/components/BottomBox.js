import React, { useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { color } from '../../../style/color';
import { size } from '../../../style/size';
import { border } from '../../../style/border';
import { typography } from '../../../style/typography';

const styles = StyleSheet.create({
    bottomBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: color["backgroundLight"][100],
        borderRadius: border.rounded.lg,
    },
    letterBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingVertical: size[4],
        gap: 8,
    },
    boxClick: {
        width: size[12],
        height: size[12],
        margin: size[1],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: border.rounded.md,
        backgroundColor: color.white,
    },
    letter: {
        color: color["backgroundLight"][700],
        fontSize: typography.fontSizes.lg,
        fontFamily: "Comfortaa-Bold",
    },
    btnDisabled: {
        backgroundColor: color["backgroundLight"][300],
    },
});

export default function Bottombox({ word, guess, onAddLetter }) {
    const getShuffleWord = useMemo(() => {
        return word.split('').sort(() => Math.random() - 0.5);
    }, [word]);

    const isSelected = (letter, index) => {
        return guess.find((item) => item.letter === letter && item.index === index) !== undefined;
    }

    return (
        <View style={styles.bottomBox}>
            <View style={styles.letterBox}>
                {
                    getShuffleWord.map((letter, index) => (
                        <Pressable
                            onPress={() => onAddLetter(letter, index)}
                            key={index}
                            style={[styles.boxClick, isSelected(letter, index) && styles.btnDisabled]}
                            disabled={isSelected(letter, index)}
                        >
                            <Text style={styles.letter}>{letter.toUpperCase()}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>
    );
}