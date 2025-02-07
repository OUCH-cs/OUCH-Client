import Svg, { Path } from "react-native-svg";

const TabHome = ({ color, ...props }: { color: string }) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 9.456A4 4 0 0 1 4.044 6.3l3.5-2.722a4 4 0 0 1 4.912 0l3.5 2.722A4 4 0 0 1 17.5 9.456v7.21a1.667 1.667 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 16.667v-7.21Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 18.166v-7.333a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7.333"
    />
  </Svg>
);
export default TabHome;
