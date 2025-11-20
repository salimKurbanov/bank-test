import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TypeIcon } from "../types/types"

const IconNoticeChat = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M3 17.46h4.891v3.04l3.97-3.04H21V3.5H3v13.96Zm8.078-6.795-1.342-1.27-1.397 1.323L9.68 11.96l1.37 1.322 1.397-1.295 3.187-2.988-1.37-1.322-3.186 2.988Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default IconNoticeChat