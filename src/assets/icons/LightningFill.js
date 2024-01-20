import Svg, { Path } from "react-native-svg";

export const LightningFill = ({ size, color, style }) => {
    return (
        <Svg width={size} height={size} fill={color} style={style} class="bi bi-lightning-fill" viewBox="0 0 16 16">
            <Path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
        </Svg>
    )
}