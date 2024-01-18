import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

import { useToast } from './useToast';

import { CheckSquareFill } from '../../assets/icons/CheckSquareFill';
import { XSquareFill } from '../../assets/icons/XSquareFill';
import { ExclamationSquareFill } from '../../assets/icons/ExclamationSquareFill';
import { QuestionSquareFill } from '../../assets/icons/QuestionSquareFill';

import { color } from '../../style/color';
import { size } from '../../style/size';
import { border } from '../../style/border';
import { typography } from '../../style/typography';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: size[4],
        left: size[4],
        right: size[4],
        padding: size[4],
        borderRadius: border["rounded"]["md"],
        borderWidth: 2,
        zIndex: 9999,
    },
    toastContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    message: {
        fontSize: typography["fontSizes"]["md"],
        marginLeft: size[4],
        fontWeight: "500",
        fontFamily: "Comfortaa-Bold"
    }
});

export default function Toast() {
    const { visible, message, type, hideToast } = useToast();
    const slideAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }).start();

            const timer = setTimeout(() => {
                hideToast();
            }, 1500);

            return () => {
                Animated.timing(slideAnim).stop();
                clearTimeout(timer);
            };
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const getToastColor = () => {
        switch (type) {
            case 'success':
                return { 
                    borderColor: color["emerald"][500],
                    backgroundColor: color["emerald"][50],
                    color: color["emerald"][500]
                };
            case 'error':
                return { 
                    borderColor: color["rose"][500],
                    backgroundColor: color["rose"][50],
                    color: color["rose"][500]
                };
            case 'warning':
                return { 
                    borderColor: color["amber"][500],
                    backgroundColor: color["amber"][50],
                    color: color["amber"][500]
                };
            case 'info':
                return { 
                    borderColor: color["indigo"][500],
                    backgroundColor: color["indigo"][50],
                    color: color["indigo"][500]
                };
            default:
                return '#0d9488';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckSquareFill size={28} color={color["emerald"][500]} />;
            case 'error':
                return <XSquareFill size={28} color={color["rose"][500]} />;
            case 'warning':
                return <ExclamationSquareFill size={28} color={color["amber"][500]} />;
            case 'info':
                return <QuestionSquareFill size={28} color={color["indigo"][500]} />;
            default:
                return '';
        }
    };

    return (
        <Animated.View
            style={{
                ...styles.container,
                ...getToastColor(),
                transform: [
                    {
                        translateY: slideAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-100, 20]
                        }),
                    },
                ],
            }}
        >
            <View style={styles.toastContainer} >
                { getIcon() }
                <Text style={[styles.message, { ...getToastColor() }]}>{message}</Text>
            </View>
        </Animated.View>
    );
}