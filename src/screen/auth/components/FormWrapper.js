import React, { useState } from "react"

import { View, Text, StyleSheet, Pressable } from "react-native"

import CustomInput from "../../../components/CustomInput"

import { color } from "../../../style/color"
import { typography } from "../../../style/typography"
import { border } from "../../../style/border"
import { size } from "../../../style/size"

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        paddingHorizontal: size["12"],
        paddingTop: size["20"],
    },
    formHeader: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["4xl"],
        color: color["textLight"][800],
        marginBottom: size["2"],
    },
    submitBtn: {
        marginTop: size["8"],
        backgroundColor: color["rose"][500],
        paddingVertical: size["2"],
        borderRadius: border["rounded"]["md"],
        width: "100%",
    },
    submitBtnText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        color: color["white"],
        textAlign: "center",
    }
})

export default function FormWrapper({ headerText, submitText, onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        onSubmit(email, password);
    }

    return (
        <View style={style.container}>
            <Text style={style.formHeader}>{headerText}</Text>
            <CustomInput
                value={email}
                onChangeText={setEmail}
                label="Email"
                placeholder="Enter your email"
                inputMode="email"
            />
            <CustomInput
                value={password}
                onChangeText={setPassword}
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={true}
            />
            <Pressable onPress={() => handleSubmit()} style={style.submitBtn}>
                <Text style={style.submitBtnText}>{submitText}</Text>
            </Pressable>
        </View>
    )
}