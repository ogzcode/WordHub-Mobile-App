import Svg, { Path } from "react-native-svg";

export const PersonCircle = ({ size, color, style }) => {
    return (
        <Svg width={size} height={size} fill={color} class={"bi bi-person-circle" + style} viewBox="0 0 16 16">
            <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <Path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </Svg>
    )
}