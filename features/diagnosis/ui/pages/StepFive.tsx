import { View, Pressable, TextInput, StyleSheet, Button, Platform} from 'react-native';
import SelectedSymptoms from '../SelectedSymptoms';
import { useRouter } from 'expo-router';
import theme from '@/shared/styles/theme';
import { Label } from '@/shared/components/label/Label';
import { useFormContext, Controller } from "react-hook-form";

const StepFive = () => {
  const router = useRouter();
  const { control, getValues, handleSubmit } = useFormContext();

  const onSubmit = () => {
    console.log("진단 제출 데이터:", getValues());
    router.push("/diagnosis"); 
  };

  return (
    <View style={styles.container}>
      <Label style={styles.question}>Please write down what you would like to tell the doctor additionally</Label>
      <SelectedSymptoms/>
      <Controller
        name="additionalNotes"
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={styles.textArea}
            placeholder="Please write down the relevant symptoms in detail"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            multiline
          />
        )}
      />
      <Pressable style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
        <Label style={styles.saveButtonText}>Save</Label>
      </Pressable>
      <Button title="뒤로 가기" onPress={() => router.back()} />
    </View>
  );
};

export default StepFive;

export const styles = StyleSheet.create({
  container: {
    paddingTop:46,
  },

  question: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 22,
    paddingHorizontal:16,
  },

  textArea: {
    height: 160,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 16,
    padding: 14,
    paddingBottom: Platform.OS === "ios" ? 30 : 120,
    backgroundColor: theme.colors.white,
    fontSize: 16,
    marginBottom:32,
  },

  saveButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    height:48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  saveButtonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});


