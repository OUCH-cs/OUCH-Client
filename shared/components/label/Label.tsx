import React from "react";
import { Text, TextProps } from "react-native";

const Label: React.FC<TextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[{ fontFamily: "Pretendard" }, style]} {...props}>
      {children}
    </Text>
  );
};
export { Label };
