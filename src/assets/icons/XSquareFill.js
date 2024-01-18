import React from "react"
import Svg, { Path } from "react-native-svg"

export const XSquareFill = ({ size, color, style }) => {
    return (
        <Svg width={size} height={size} fill={color} class="bi bi-x-square-fill " style={style} viewBox="0 0 16 16">
            <Path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
        </Svg>
    )
}