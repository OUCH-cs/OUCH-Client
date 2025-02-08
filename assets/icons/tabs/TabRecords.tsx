import Svg, { Path } from "react-native-svg";

const TabRecords = ({
  color,
  strokeWidth = 2,
  ...props
}: {
  color: string;
  strokeWidth?: number;
}) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M11.665 1.667H5a1.667 1.667 0 0 0-1.667 1.666v13.334a1.666 1.666 0 0 0 1.667 1.666h10a1.667 1.667 0 0 0 1.666-1.666v-10l-5-5Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M11.668 1.667v5h5M13.335 10.833H6.668M13.335 14.167H6.668M8.335 7.5H6.668"
    />
  </Svg>
);
export default TabRecords;
