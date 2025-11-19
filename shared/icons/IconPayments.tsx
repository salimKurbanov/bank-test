import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconPayments = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M13.497.068 14.92 1.49l4.24 4.24.59.59-.59.589-4.24 4.24-1.423 1.423V9.11H8.278V3.53h5.22V.067ZM6.503 7.424 5.08 8.847l-4.24 4.24-.59.59.59.589 4.24 4.24 1.423 1.423v-3.462h5.219v-5.58h-5.22V7.423Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color} d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconPayments