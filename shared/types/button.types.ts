import { PressableProps } from "react-native";

interface ICustomButton extends PressableProps {
  width?: number;
  height?: number;
  radius?: number;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export type { ICustomButton };
