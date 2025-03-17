import { useState } from 'react';
import { View, Pressable, TextInput, StyleSheet, Button, Platform} from 'react-native';
import SelectedSymptoms from './SelectedSymptoms';
import { useStore } from '../services/useStore';
import { useRouter } from 'expo-router';
import theme from '@/shared/styles/theme';
import { Label } from '@/shared/components/label/Label';

const StepFive = () => {
  const router = useRouter();
  const { additionalNotes, setAdditionalNotes } = useStore();
  const [notes, setNotes] = useState(additionalNotes);

  const handleSave = () => {
    setAdditionalNotes(notes);
    console.log('Saved Notes:', notes);
  };

  return (
    <View style={styles.container}>
      <Label style={styles.question}>Please write down what you would like to tell the doctor additionally</Label>
      <SelectedSymptoms/>
      <TextInput
        style={styles.textArea}
        placeholder="Please write down the relevant symptoms in detail"
        value={notes}
        onChangeText={setNotes}
        multiline
      />
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Label style={styles.saveButtonText}>Save</Label>
      </Pressable>
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


