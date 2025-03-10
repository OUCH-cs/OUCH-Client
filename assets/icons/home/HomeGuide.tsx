import React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

interface SvgComponentProps extends SvgProps {}

const HomeGuide: React.FC<SvgComponentProps> = (props) => (
  <Svg 
    width={29}
    height={28}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#0097A7"
        d="M3.5 21.583V5.833a3.5 3.5 0 0 1 3.5-3.5h16.333A1.167 1.167 0 0 1 24.5 3.5v21a1.167 1.167 0 0 1-1.167 1.166H7.583A4.083 4.083 0 0 1 3.5 21.584Zm18.667 1.75v-3.5H7.583a1.75 1.75 0 0 0 0 3.5h14.584Zm-16.334-5.44a4.083 4.083 0 0 1 1.75-.393h14.584V4.667H7a1.167 1.167 0 0 0-1.167 1.166v12.06Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HomeGuide;
