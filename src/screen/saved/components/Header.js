import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'

import { Search } from "../../../assets/icons/Search"


import { color } from "../../../style/color"
import { size } from "../../../style/size"
import { border } from "../../../style/border"
import { typography } from "../../../style/typography"

const style = StyleSheet.create({
    container: {
        height: size[24],
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: border["width"][1],
        borderBottomColor: color["borderDark"][400],
    },
    searchBox: {
        width: "90%",
        height: size[12],
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: size[3],
        gap: size[4],
    },
    input: {
        flex: 1,
        padding: size[3],
        backgroundColor: color["white"],
        borderRadius: border["rounded"]["lg"],
        color: color["textDark"][700],
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        borderWidth: border["width"][1],
        borderColor: color["borderDark"][400],
    },
    iconBtn: {
        height: "100%",
        width: size[12],
        borderRadius: border["rounded"]["lg"],
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color["rose"][500],
    }
})


export const Header = ({ onSearch }) => {
    const [search, setSearch] = React.useState("")

    const handleSearch = () => {
        onSearch(search)
        setSearch("")
    }

    return (
        <View style={style.container}>
            <View style={style.searchBox}>
                <TextInput value={search} onChangeText={setSearch} style={style.input} placeholder="Search" />
                <Pressable onPress={() => handleSearch()}  style={style.iconBtn}>
                    <Search size={size[6]} color={color["white"]} />
                </Pressable>
            </View>
        </View>
    )
}