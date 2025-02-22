import Svg, { Path } from "react-native-svg";

const Arrow = ({
  width,
  height,
  strokeWidth = 2,
  ...props
}: {
  width: number;
  height: number;
  strokeWidth?: number;
}) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M17.5 21L10.5 14L17.5 7"
      stroke="black"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Arrow;
