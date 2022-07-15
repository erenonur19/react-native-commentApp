import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export default function Send(props) {
  return (
    <Svg width={20} height={25} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-3h24v24H-2z" />
      <Path
        d="m1.4 17.4 17.45-7.48a1 1 0 0 0 0-1.84L1.4.6a.993.993 0 0 0-1.39.91L0 6.12c0 .5.37.93.87.99L15 9 .87 10.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91Z"
        fill="#FFD100"
      />
    </G>
  </Svg>
  )
}
