import React, { useState, useCallback, useRef } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';


import { size } from "../style/size";
import { color } from "../style/color";
import { typography } from "../style/typography";
import { border } from "../style/border";

const style = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: size["4"],
    },
    label: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["sm"],
        color: color["textLight"][800],
        marginBottom: size["1"],
    },
    labelFocused: {
        color: color["rose"][500],
    },
    input: {
        fontFamily: "Comfortaa-Regular",
        fontSize: typography["fontSizes"]["md"],
        color: color["textLight"][700],
        backgroundColor: color["white"],
        paddingVertical: size["2"],
        paddingHorizontal: size["4"],
        borderRadius: border["rounded"]["md"],
        borderWidth: border["width"]["default"],
        borderColor: color["textLight"][400],
        width: "100%",
    },
    inputFocused: {
        borderColor: color["rose"][500],
    },
})


export default function CustomInput({ value, onChangeText, label, placeholder, children, ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const inputRef = useRef(null);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);
    
    return (
        <View style={style.container}>
            <Text style={[style.label, isFocused && style.labelFocused]}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                ref={inputRef}
                style={[style.input, isFocused && style.inputFocused]}
                placeholder={placeholder}
                placeholderTextColor={color["textLight"][400]}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}
            />
            { children }
        </View>
    )
}