import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export default function TickBoxChecked(props) {
  return (
    <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-3-3h24v24H-3z" />
      <Path
        d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2ZM7.71 13.29a.996.996 0 0 1-1.41 0L2.71 9.7a.996.996 0 1 1 1.41-1.41L7 11.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.58 7.59Z"
        fill="#333533"
      />
    </G>
  </Svg>
  )
}
