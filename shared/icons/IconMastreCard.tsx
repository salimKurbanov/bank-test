import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TypeIcon } from "../types/types"

const IconMastreCard = ({ size, style }: TypeIcon) => (
    <Svg
        style={style}
        width={size}
        // height={'auto'}
        height={16}
        fill="none"
    >
        <Path
            fill="#fff"
            d="M8 0c1.892 0 3.63.658 5 1.757A7.983 7.983 0 0 0 10 8a7.983 7.983 0 0 0 3 6.242A8 8 0 1 1 8 0Zm10 0a8 8 0 1 1-5 14.242A7.983 7.983 0 0 0 16 8a7.983 7.983 0 0 0-3-6.243A7.964 7.964 0 0 1 18 0Z"
            opacity={0.6}
        />
    </Svg>
)
export default IconMastreCard