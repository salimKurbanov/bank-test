import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { TypeIcon } from "../types/types"

const IconSupport = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <G fill="#FE5900" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M6 8a6 6 0 1 1 12 0v8a4.5 4.5 0 0 1-4.5 4.5H13V19h-2v5h2v-1.5h.5A6.5 6.5 0 0 0 20 16V8A8 8 0 1 0 4 8v9h2V8Z" />
      <Path d="M6 8H0v9h6V8ZM24 8h-6v9h6V8Z" opacity={0.2} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconSupport