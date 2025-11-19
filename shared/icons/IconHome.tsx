import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconHome = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    color={color}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M20.125 8.254 10.5.004.875 8.254v10.913h19.25V8.254Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default IconHome