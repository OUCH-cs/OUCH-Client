import { SafeAreaView, StyleSheet } from "react-native";
import theme from "@/shared/styles/theme";
import InputField from "@/shared/components/input-field/InputField";
import { useEffect, useState } from "react";
import {
  useSignUpDataStore,
  useSignUpStatusStore,
} from "@/features/auth/services/authStore";
import { SelectGender, SignUpForm } from "@/features/auth/ui";
import { ISignUpData } from "@/features/auth/types";
import { useSignUpState } from "@/features/auth/services/useSignUpState";

export default function SignUp() {
  const signUpStatus = useSignUpStatusStore((state) => state.signUpStatus);
  const signUpData = useSignUpDataStore((state) => state.signUpData);
  const { handleSignUpState } = useSignUpState();
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleTextChange = (name: keyof ISignUpData, text: string) => {
    text.length > 0 ? setIsValid(true) : setIsValid(false);
    handleSignUpState(name, text);
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 이름 */}
      {signUpStatus === 0 && (
        <SignUpForm title="Enter Your Name" isValid={isValid}>
          <InputField
            placeholder="YUJIN"
            name="name"
            value={signUpData.name}
            autoFocus
            onChangeText={(text) => handleTextChange("name", text)}
          />
        </SignUpForm>
      )}

      {/* 성별 */}
      {signUpStatus === 1 && (
        <SignUpForm title="Select Your Gender" isValid={isValid}>
          <SelectGender />
        </SignUpForm>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
