import { View, Pressable, StyleSheet } from "react-native";
import { Label } from "../label/Label";
import theme from "@/shared/styles/theme";
import { ICustomButton } from "@/shared/types";

/**
 * 커스텀 버튼 컴포넌트
 *
 * @param {number} [width=312] - 버튼의 너비
 * @param {number} [height=48] - 버튼의 높이
 * @param {number} [radius=10] - 버튼의 테두리 반경
 * @param {React.ReactNode} [icon] - 버튼에 표시할 아이콘
 * @param {boolean} [disabled=false] - 버튼 비활성화 여부
 * @param {React.ReactNode} children - 버튼에 표시할 텍스트
 * @param {object} props - 추가적인 Pressable 컴포넌트의 속성
 * 
 * @returns {React.ReactElement} - 커스텀 버튼 컴포넌트

 */

export default function CustomButton({
  width = 312,
  height = 48,
  radius = 10,
  icon,
  children,
  disabled = false,
  ...props
}: ICustomButton) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        { width, height, borderRadius: radius },
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...props}
    >
      <View style={styles.innerContainer}>
        {icon && <View>{icon}</View>}
        <Label style={[styles.text, disabled && styles.textDisabled]}>
          {children}
        </Label>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },

  pressed: {
    opacity: 0.9,
  },

  disabled: {
    backgroundColor: theme.colors.white_e5,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  text: {
    fontSize: 18,
    fontWeight: 400,
    color: theme.colors.white,
  },

  textDisabled: {
    color: theme.colors.gray_7,
  },
});
