import * as React from "react"
import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function Like(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <Path
      fill="#FFFFFF"    stroke="#F44336" stroke-width="5" stroke-opacity="15"  
      d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9 7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
    />

  </Svg>
  )
}
