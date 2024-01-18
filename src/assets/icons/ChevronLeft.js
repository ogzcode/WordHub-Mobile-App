import Svg, { Path } from "react-native-svg";

export const ChevronLeft = ({ size, color, style }) => {
    return (
        <Svg width={size} height={size} fill={color} class="bi bi-chevron-left " style={style} viewBox="0 0 16 16">
            <Path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </Svg>
    )
}