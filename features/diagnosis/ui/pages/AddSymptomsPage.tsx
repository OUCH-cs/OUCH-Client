import { useState } from "react";
import { View, TextInput, Pressable, FlatList, StyleSheet } from "react-native";
import { Label } from "@/shared/components/label/Label";
import theme from "@/shared/styles/theme";
import PlusButton from "@/assets/icons/diagnosis/PlusButton";
import CustomButton from "@/shared/components/button/CustomButton";
import { useSymptomsStore } from "../../services/useSymptomsStore";
import MinusButton from "@/assets/icons/diagnosis/MinusButton";


interface AddSymptomsProps {
  onClose: () => void;
}

const AddSymptoms = ({ onClose }: AddSymptomsProps) => {
  const [inputText, setInputText] = useState("");
  const { customSymptoms, addSymptom, removeSymptom } = useSymptomsStore();

  const handleAddSymptom = () => {
    if (inputText.trim() && !customSymptoms.includes(inputText)) {
      addSymptom(inputText);
      setInputText("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Add symptoms"
          style={styles.input}
        />
        <Pressable onPress={handleAddSymptom} style={styles.addButton}>
          <PlusButton />
        </Pressable>
      </View>
      <FlatList
        data={customSymptoms}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.symptomItem}>
            <Label style={styles.symptomText}>{item}</Label>
            <Pressable onPress={() => removeSymptom(item)} style={styles.removeButton}>
              <MinusButton/>
            </Pressable>
          </View>
        )}
      />
      <CustomButton onPress={onClose} style={styles.closeButton}>
        <Label style={styles.closeButtonText}>Close</Label>
      </CustomButton>
    </View>
  );
};

export default AddSymptoms;

const styles = StyleSheet.create({
  container: {
    marginTop:-46,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height:52,
    borderWidth: 1,
    borderColor: theme.colors.white_e5,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor:theme.colors.white,
  },

  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: theme.colors.white,
  },

  addButton: {
    padding: 16,
    borderColor: "transparent",
  },

  addButtonText: {
    fontSize: 16,
  },

  symptomItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height:52,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.white_e5,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginBottom: 8,
  },

  symptomText: {
    fontSize: 16,
  },

  removeButton: {
    padding:6,
    
  },

  closeButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    height:48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButtonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});


