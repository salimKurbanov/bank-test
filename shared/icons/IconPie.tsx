import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconPie = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    color={color}
  >
    <G clipPath="url(#a)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M10.834.009h.833a8.325 8.325 0 0 1 8.325 8.324v.834h-9.158V.009ZM.044 11.63A8.325 8.325 0 0 1 8.37 3.306h.833V10.797h7.492v.833a8.325 8.325 0 1 1-16.65 0Z"
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
export default IconPie