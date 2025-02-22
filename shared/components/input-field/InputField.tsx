import theme from "@/shared/styles/theme";
import React from "react";
import { TextInputProps, Pressable, TextInput, StyleSheet } from "react-native";
import { Label } from "../label/Label";

interface InputFieldProps extends TextInputProps {
  name?: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

export default function InputField({
  disabled = false,
  error,
  touched,
  ...props
}: InputFieldProps) {
  const innerRef = React.useRef<TextInput | null>(null);

  const handlePressInput = () => {
    innerRef.current?.focus();
  };

  return (
    <Pressable
      onPress={handlePressInput}
      style={[styles.container, touched && Boolean(error) && styles.inputError]}
    >
      <TextInput
        ref={innerRef}
        editable={!disabled}
        placeholderTextColor={theme.colors.gray_7}
        autoCapitalize="none"
        spellCheck={false}
        style={styles.input}
        {...props}
      />
      {touched && Boolean(error) && (
        <Label style={styles.textError}>{error}</Label>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 56,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.white_e5,
    borderRadius: 10,
  },

  input: {
    fontSize: 16,
    color: theme.colors.black,
    fontWeight: 400,
  },
  inputError: {
    borderWidth: 1,
    borderColor: theme.colors.red,
  },

  textError: {
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.red,
  },
});
