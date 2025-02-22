import { View, Pressable, StyleSheet } from "react-native";
import { Label } from "@/shared/components/label/Label";
import theme from "@/shared/styles/theme";
import { useSignUpDataStore } from "../services/authStore";
import { useSignUpState } from "../services/useSignUpState";

function SelectGender() {
  const signUpData = useSignUpDataStore((state) => state.signUpData);
  const { handleSignUpState } = useSignUpState();

  const handleGenderSelect = (gender: "MALE" | "FEMALE") => {
    handleSignUpState("gender", gender);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, signUpData.gender === "MALE" && styles.selected]}
        onPress={() => handleGenderSelect("MALE")}
      >
        <Label
          style={[
            styles.buttonText,
            signUpData.gender === "MALE" && styles.selectedText,
          ]}
        >
          Male
        </Label>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          signUpData.gender === "FEMALE" && styles.selected,
        ]}
        onPress={() => handleGenderSelect("FEMALE")}
      >
        <Label
          style={[
            styles.buttonText,
            signUpData.gender === "FEMALE" && styles.selectedText,
          ]}
        >
          Female
        </Label>
      </Pressable>
    </View>
  );
}

export { SelectGender };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 328,
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.white_e5,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    color: theme.colors.gray_7,
  },
  selected: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.tertiary,
  },
  selectedText: {
    color: theme.colors.primary,
  },
});
