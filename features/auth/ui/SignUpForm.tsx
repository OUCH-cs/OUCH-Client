import CustomButton from "@/shared/components/button/CustomButton";
import theme from "@/shared/styles/theme";
import { View, Text, StyleSheet } from "react-native";
import { ISignUpForm } from "../types/sign-up.types";
import { useSignUpStatusStore } from "../services/authStore";

function SignUpForm({ title, children, isValid }: ISignUpForm) {
  const setSignUpStatus = useSignUpStatusStore(
    (state) => state.setSignUpStatus
  );

  const handleSignUpStatus = () => {
    if (isValid) {
      const currentStatus = useSignUpStatusStore.getState().signUpStatus;
      setSignUpStatus(currentStatus + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.formWrapper}>{children}</View>

      <CustomButton
        width={328}
        height={48}
        disabled={!isValid}
        onPress={handleSignUpStatus}
      >
        Next
      </CustomButton>
    </View>
  );
}

export { SignUpForm };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: 400,
    color: theme.colors.black,
    marginBottom: 49,
  },

  formWrapper: {
    marginBottom: 66,
  },
});
