import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface SvgComponentProps extends SvgProps {}

const MinusButton: React.FC<SvgComponentProps> = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M1.143 7.143a1.143 1.143 0 0 0 0 2.286h13.714a1.143 1.143 0 0 0 0-2.286H1.143Z"
    />
  </Svg>
);

export default MinusButton;
