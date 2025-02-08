import React from "react";
import { View, Pressable, StyleSheet, PressableProps } from "react-native";
import { Label } from "../label/Label";
import theme from "@/shared/styles/theme";

interface ICustomButton extends PressableProps {
  width?: number;
  height?: number;
  radius?: number;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

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
    opacity: 0.8,
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
    color: theme.colors.white,
  },

  textDisabled: {
    color: theme.colors.gray_7,
  },
});
