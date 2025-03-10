import React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";


interface SvgComponentProps extends SvgProps {}

const HospitalRate: React.FC<SvgComponentProps> = (props) => (
  <Svg
    width={12}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      fill="#FC0"
      d="m6 0 1.854 3.62L12 4.205 9 7.02 9.708 11 6 9.12 2.292 11 3 7.021 0 4.205l4.146-.585L6 0Z"
    />
  </Svg>
)
export default HospitalRate



