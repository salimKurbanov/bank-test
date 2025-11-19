import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconHistory = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    color={color}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M10.495.667A9.164 9.164 0 0 0 1.33 9.833 9.168 9.168 0 0 0 10.495 19a9.164 9.164 0 0 0 9.165-9.167A9.167 9.167 0 0 0 10.495.667Zm-.833 4.166v5.834h4.166V9h-2.5V4.833H9.662Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default IconHistory