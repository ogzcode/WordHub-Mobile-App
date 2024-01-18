import React, { useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';

import { XLarge } from "../assets/icons/XLarge";

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
    },
    inlineBox: {
        backgroundColor: color["white"],
        width: size[96],
        maxHeight: size["3/4"],
        borderRadius: border["rounded"]["md"],
    },
    header: {
        padding: size[4],
        borderBottomWidth: border["width"][1],
        borderBottomColor: color["blueGray"][200],
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
    },
    title: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["xl"],
        color: color["textDark"][800],
    },
    closeIcon: {
        padding: size[2],
        backgroundColor: color["blueGray"][200],
        borderRadius: border["rounded"]["full"],
    }
});

export default function Dialog({ visible, title, children, onClose = () => { }, onSubmit = () => { } }) {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.inlineBox}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <Pressable style={styles.closeIcon} onPress={onClose}>
                            <XLarge
                                size={size[6]}
                                color={color["blueGray"][600]}
                            />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    );
}