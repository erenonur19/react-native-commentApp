import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export default function TickBox(props) {
  return (
    <Svg
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={25}
    height={20}
    {...props}
  >
    <Path d="M11 4c-3.845 0-7 3.155-7 7v28c0 3.845 3.155 7 7 7h28c3.845 0 7-3.155 7-7V11c0-3.845-3.155-7-7-7H11zm0 2h28c2.755 0 5 2.245 5 5v28c0 2.755-2.245 5-5 5H11c-2.755 0-5-2.245-5-5V11c0-2.755 2.245-5 5-5z" />
  </Svg>
  )
}
