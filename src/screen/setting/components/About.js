import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import * as Linking from 'expo-linking';

import { Twitter } from '../../../assets/icons/Twitter';
import { Github } from '../../../assets/icons/Github';
import { Linkedin } from '../../../assets/icons/Linkedin';

import { size } from '../../../style/size';
import { color } from '../../../style/color';
import { border } from '../../../style/border';
import { typography } from '../../../style/typography';

const style = StyleSheet.create({
    aboutBox: {
        backgroundColor: "white",
        padding: size["4"],
        borderRadius: size["2"],
        borderWidth: border["width"][1],
        borderColor: color["borderDark"][200],
        marginVertical: size["8"]
    },
    aboutHeaderText: {
        fontSize: typography["fontSizes"]["2xl"],
        fontFamily: "Comfortaa-Bold",
        marginBottom: size["2"],
        color: color["textDark"][700]
    },
    contact: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: size["4"]
    },
    contactBtn: {
        backgroundColor: color["rose"][500],
        borderRadius: border["rounded"]["md"],
        paddingVertical: size["3"],
        paddingHorizontal: size["4"]
    }
})

export default function About() {
    return (
        <View style={style.aboutBox}>
            <Text style={style.aboutHeaderText}>About</Text>
            <Text style={{ fontFamily: "Comfortaa-Regular", fontSize: typography["fontSizes"]["md"], color: color["textDark"][700] }}>
                This application is made by <Text style={{ fontFamily: "Comfortaa-Bold", fontSize: typography["fontSizes"]["md"], color: color["textDark"][700] }}>Oğuzhan Güç</Text> with the help of <Text style={{ fontFamily: "Comfortaa-Bold", fontSize: typography["fontSizes"]["md"], color: color["textDark"][700] }}>React Native</Text> and <Text style={{ fontFamily: "Comfortaa-Bold", fontSize: typography["fontSizes"]["md"], color: color["textDark"][700] }}>Expo</Text>.
            </Text>
            <View style={style.contact}>
                <Pressable style={style.contactBtn} onPress={() => Linking.openURL("https://twitter.com/ogzCode")}>
                    <Twitter size={size[6]} color={color["white"]} />
                </Pressable>
                <Pressable style={style.contactBtn} onPress={() => Linking.openURL("https://github.com/ogzcode")}>
                    <Github size={size[6]} color={color["white"]} />
                </Pressable>
                <Pressable style={style.contactBtn} onPress={() => Linking.openURL("https://www.linkedin.com/in/o%C4%9Fuzhan-g%C3%BC%C3%A7-327633193/")}>
                    <Linkedin size={size[6]} color={color["white"]} />
                </Pressable>
            </View>
        </View>
    )
}