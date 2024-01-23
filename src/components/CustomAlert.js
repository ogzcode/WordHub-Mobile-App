import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';

import { color } from '../style/color';
import { size } from '../style/size';
import { border } from '../style/border';
import { typography } from '../style/typography';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.2)",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: size[4],
    },
    inlineBox: {
        backgroundColor: color["white"],
        width: "100%",
        borderRadius: border["rounded"]["md"],
        padding: size[4],
    },
    title: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["xl"],
        color: color["textDark"][800],
        marginBottom: size[2],
    },
    content: {
        fontFamily: "Comfortaa-Regular",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][700],
        marginBottom: size[4],
    },
    footer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: size[4],
    },
    footerBtn: {
        paddingVertical: size[2],
        paddingHorizontal: size[4],
        borderRadius: border["rounded"]["md"],
        marginLeft: size[2],
    },
    footerText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
    },
    submitBtn: {
        backgroundColor: color["blue"][100],
        padding: size[2],
        borderRadius: border["rounded"]["md"],
        marginTop: size[2],
    },
    cancelBtn: {
        backgroundColor: color["backgroundDark"][100],
        padding: size[2],
        borderRadius: border["rounded"]["md"],
        marginTop: size[2],
    },
});

export default function CustomAlert({ 
    visible, 
    title, 
    content,
    submitText = "Submit",
    cancelText = "Cancel", 
    onClose = () => { }, onSubmit = () => { } }) {
    if (!visible) return null;

    const handleSubmit = () => {
        onSubmit();
        onClose();
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.inlineBox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{ content }</Text>
                    <View style={styles.footer}>
                        <Pressable style={[styles.footerBtn, styles.cancelBtn]} onPress={onClose}>
                            <Text style={[styles.footerText, { color: color["textDark"][800]}]}>{ cancelText }</Text>
                        </Pressable>
                        <Pressable style={[styles.footerBtn, styles.submitBtn]} onPress={handleSubmit}>
                            <Text style={[styles.footerText, { color: color["blue"][500]}]}>{ submitText }</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}