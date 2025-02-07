import Svg, { Path } from "react-native-svg";

const TabTranslate = ({ color, ...props }: { color: string }) => (
  <Svg width={16} height={21} fill="none" {...props}>
    <Path
      stroke={color}
      d="M8.107 12.833c-1.712 0-3.044-1.296-3.044-2.833V4.167c0-1.537 1.332-2.834 3.044-2.834 1.711 0 3.044 1.297 3.044 2.834V10c0 1.537-1.333 2.833-3.044 2.833Z"
    />
    <Path
      stroke={color}
      d="M11.264 4.167c0-1.68-1.449-3-3.158-3-1.709 0-3.158 1.32-3.158 3V10c0 1.68 1.45 3 3.158 3 1.709 0 3.158-1.32 3.158-3V4.167Zm-7.088 0C4.176 2.17 5.907.5 8.106.5s3.93 1.671 3.93 3.667V10c0 1.995-1.731 3.667-3.93 3.667S4.176 11.995 4.176 10V4.167Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M15 10.833c-.753 3.209-3.615 5.617-7 5.617-3.394 0-6.256-2.408-7-5.617"
    />
    <Path
      fill={color}
      d="M7.105 20a1 1 0 1 0 2 0h-2Zm0-3.333V20h2v-3.333h-2Z"
    />
  </Svg>
);
export default TabTranslate;
