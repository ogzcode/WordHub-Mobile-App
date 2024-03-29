import Svg, { Path } from "react-native-svg"

export const BookmarkFill = ({ size, style, color }) => {
    return (
        <Svg width={size} height={size} fill={color} class="bi bi-bookmark-fill " style={style} viewBox="0 0 16 16">
            <Path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </Svg>
    )
}