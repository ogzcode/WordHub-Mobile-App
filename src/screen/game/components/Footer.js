import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { Eraser } from "../../../assets/icons/Eraser";
import { QuestionLarge } from '../../../assets/icons/QuestionLarge';
import { LightningFill } from '../../../assets/icons/LightningFill';

import { color } from "../../../style/color";
import { size } from '../../../style/size';
import { border } from '../../../style/border';

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: size[6],
    },
    btnBase: {
        paddingVertical: size[3],
        paddingHorizontal: size[3],
        borderRadius: border.rounded.md,
    },
    deleteBtn: {
        backgroundColor: color.rose[100],
    },
    submitBtn: {
        backgroundColor: color["orange"][100],
    }
});

export default function FooterBtn({ onDeleteLetter, onNextWord }) {
    return (
        <View style={styles.btnContainer}>
            <Pressable onPress={() => onDeleteLetter()}
                style={[styles.deleteBtn, styles.btnBase]}>
                <Eraser size={24} color={color.rose[500]} />
            </Pressable>
            <Pressable onPress={() => onNextWord()} style={[styles.submitBtn, styles.btnBase]}>
                <LightningFill size={24} color={color["amber"][500]} />
            </Pressable>
        </View>
    )
}