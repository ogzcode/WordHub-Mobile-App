import React from "react";
import { ActivityIndicator, View } from "react-native";

import { color } from "../style/color";
import { size } from "../style/size";

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={size[16]} color={color["rose"]["500"]} />
        </View>
    )
}   