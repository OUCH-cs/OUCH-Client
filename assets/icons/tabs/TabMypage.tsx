import Svg, { Path } from "react-native-svg";

const TabMypage = ({ color, ...props }: { color: string }) => (
  <Svg width={17} height={18} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 17v-1.778c0-1.964-1.622-3.555-3.625-3.555h-7.25C2.622 11.667 1 13.257 1 15.222V17M8.25 8.111c2.002 0 3.625-1.592 3.625-3.555C11.875 2.592 10.252 1 8.25 1S4.625 2.592 4.625 4.556c0 1.963 1.623 3.555 3.625 3.555Z"
    />
  </Svg>
);
export default TabMypage;
