import Svg, { Path } from "react-native-svg";

const TabSearch = ({ color, ...props }: { color: string }) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#354A4D"
      stroke={color}
      d="M16.582 16.582a.592.592 0 0 0 0-.837l-3.406-3.406c-.365-.365-.384-.946-.112-1.385a6.52 6.52 0 1 0-2.11 2.11c.44-.272 1.02-.253 1.385.112l3.406 3.406a.592.592 0 0 0 .837 0ZM2.205 7.532a5.326 5.326 0 1 1 10.652 0 5.326 5.326 0 0 1-10.652 0Z"
    />
  </Svg>
);
export default TabSearch;
