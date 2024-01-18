import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { Gift } from "../../../assets/icons/Gift";
import { BookmarkHearth } from "../../../assets/icons/BookmarkHearth";
import { House } from "../../../assets/icons/House";

import { color } from "../../../style/color";
import { size } from "../../../style/size";
import { border } from "../../../style/border";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: color["rose"][500],
        height: size["16"],
        borderTopLeftRadius: border["rounded"]["3xl"],
        borderTopRightRadius: border["rounded"]["3xl"],
    },
    tabIcon: {
        padding: size["3"]
    },
    activeTab: {
        backgroundColor: color["white"],
        borderRadius: border["rounded"]["full"]
    }
});

const getTabBarIcon = (routeName, isActive) => {
    switch (routeName) {
        case 'Home':
            return <House size={24} color={isActive ? color["rose"][500] : color["white"]} />;
        case 'Saved':
            return <BookmarkHearth size={24} color={isActive ? color["rose"][500] : color["white"]} />;
        default:
            return <Gift size={24} color={isActive ? color["rose"][500] : color["white"]} />;
    }
}

export const CustomTabBar = ({ state, navigation }) => {
    return (
        <View style={styles.container}>
            {
                state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <Pressable
                            key={route.key}
                            onPress={onPress}
                            style={[styles.tabIcon, isFocused && styles.activeTab]}
                        >
                            {
                                getTabBarIcon(route.name, isFocused)
                            }
                        </Pressable>
                    );
                })
            }
        </View>
    );
}