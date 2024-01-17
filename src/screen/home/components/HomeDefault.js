import { View, Text, StyleSheet } from "react-native";
import SearchSVG from "../../../assets/svgComponents/SearchSVG";

import { color } from "../../../style/color";
import { typography } from "../../../style/typography";
import { size } from "../../../style/size";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: size[4],
    },
    text: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["xl"],
        color: color["textDark"][700],
        marginTop: size[4],
        textAlign: "center"
    }
})

export default function HomeDefault() {
    return (
        <View style={style.container}>
            <SearchSVG width={280} height={280} />
            <Text style={style.text}>
                Are you ready to learn English words?
            </Text>
        </View>
    )
}