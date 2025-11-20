import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconTransferMoney = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <G fill="#FE5900" clipPath="url(#a)">
      <Path d="M6.667 3.333 10 0l3.333 3.333v.834H11.25V12.5h-2.5V4.167H6.667v-.834Z" />
      <Path
        fillOpacity={0.2}
        fillRule="evenodd"
        d="M2.929 17.071A10 10 0 0 1 7.26.383L5 2.643v3.19h2.083v8.334h5.834V5.833H15v-3.19L12.74.383A10 10 0 1 1 2.928 17.07Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 20V0h20v20z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconTransferMoney