import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { TypeIcon } from "../types/types"
const IconUser = ({ size, style, color = '#fff' }: TypeIcon) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M12 4.333v4H4v-4a4 4 0 1 1 8 0ZM1 12a66.092 66.092 0 0 1-.433-.507l.002-.001.003-.003.009-.008a3.042 3.042 0 0 1 .128-.1 6.27 6.27 0 0 1 .368-.254c.32-.206.79-.474 1.41-.74C3.73 9.855 5.57 9.333 8 9.333s4.27.522 5.513 1.054a9.63 9.63 0 0 1 1.41.74 6.268 6.268 0 0 1 .496.354l.01.008.002.003h.002v.001L15 12l.434-.506.233.2v3.973H.333v-3.974l.234-.2L1 12Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconUser