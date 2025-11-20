import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconSecurity = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill="#FE5900"
      d="M10 0 9.421.56a4.891 4.891 0 0 1-6.13.536l-.325-.22L1.666 0v15.497l.438.236 7.5 4.05.396.214V0Z"
    />
    <Path
      fill="#FE5900"
      d="m10 0 .579.559a4.891 4.891 0 0 0 6.13.536l.325-.22 1.3-.875v15.497l-.438.236-7.5 4.05-.396.214V0Z"
      opacity={0.2}
    />
  </Svg>
)
export default IconSecurity