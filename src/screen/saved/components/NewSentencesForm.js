import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import CustomInput from '../../../components/CustomInput';

import { color } from '../../../style/color';
import { size } from '../../../style/size';
import { border } from '../../../style/border';


const style = StyleSheet.create({
    inputBox: {
        paddingHorizontal: size[6],
        paddingBottom: size[6],
    },
    dialogFooter: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: size[3],
    },
    footerBtn: {
        flex: 1,
        marginTop: size[4],
        paddingVertical: size[2],
        paddingHorizontal: size[4],
        borderRadius: border["rounded"]["md"],
        backgroundColor: color["gray"][200],
    },
    footerBtnText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: size[4],
        textAlign: "center",
    },
    cancelBtn: {
        backgroundColor: color["red"][100],
    },
    cancelBtnText: {
        color: color["red"][500],
    },
    submitBtn: {
        backgroundColor: color["teal"][100],
    },
    submitBtnText: {
        color: color["teal"][500],
    },
})

export default function NewSentencesForm({ onCancel, onSubmit }) {
    const [sentence, setSentence] = useState("");

    const handleSubmit = () => {
        onSubmit(sentence);
        setSentence("");
    }

    return (
        <View style={style.inputBox}>
            <CustomInput value={sentence} onChangeText={setSentence} placeholder="Enter your sentence" />
            <View style={style.dialogFooter}>
                <Pressable onPress={() => onCancel()} style={[style.footerBtn, style.cancelBtn]}>
                    <Text style={[style.footerBtnText, style.cancelBtnText]}>Cancel</Text>
                </Pressable>
                <Pressable onPress={() => handleSubmit()} style={[style.footerBtn, style.submitBtn]}>
                    <Text style={[style.footerBtnText, style.submitBtnText]}>Add</Text>
                </Pressable>
            </View>
        </View>
    )
}