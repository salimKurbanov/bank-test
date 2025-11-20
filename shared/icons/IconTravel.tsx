import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconTravel = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <G fill="#FE5900" clipPath="url(#a)">
      <Path
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Z"
        opacity={0.2}
      />
      <Path
        fillRule="evenodd"
        d="M10.253 10.614 12.5 12.9v6.785C16.813 18.575 20 14.66 20 10a9.955 9.955 0 0 0-1.877-5.833h-5.166a3.79 3.79 0 0 0-2.704 6.447ZM.138 11.667H5A3.333 3.333 0 0 1 8.333 15v4.862a10.008 10.008 0 0 1-8.195-8.195Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconTravel