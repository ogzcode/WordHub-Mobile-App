import Svg, { Path } from "react-native-svg";

export const ThreeDotsVertical = ({ size, color, style }) => {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <Path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </Svg>
    )
}