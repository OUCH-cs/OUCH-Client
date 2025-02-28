import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard 
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function HealthStatusRecordListEdit1() {
  const router = useRouter();
  const [bloodPressure, setBloodPressure] = useState(""); 
  const [bloodSugar, setBloodSugar] = useState(""); 
  const [fasting, setFasting] = useState(""); 
  const [postprandial, setPostprandial] = useState(""); 
  const [contraction, setContraction] = useState(""); 
  const [relaxation, setRelaxation] = useState(""); 
  const [focusedInput, setFocusedInput] = useState<string | null>(null); 
  const [isEditingBloodPressure, setIsEditingBloodPressure] = useState(false);
  const [isEditingBloodSugar, setIsEditingBloodSugar] = useState(false);
  const [savedBloodPressure, setSavedBloodPressure] = useState<string>("");
  const [savedBloodSugar, setSavedBloodSugar] = useState<string>(""); 

  const contractionInputRef = useRef<TextInput>(null);
  const relaxationInputRef = useRef<TextInput>(null);
  const fastingInputRef = useRef<TextInput>(null);
  const postprandialInputRef = useRef<TextInput>(null);
  const [medicineHistoryList, setMedicineHistoryList] = useState<string[]>([""]);
  const [isEditingMedicineHistory, setIsEditingMedicineHistory] = useState(false);


  
  const handleSaveBloodPressure = () => {
    const formattedBloodPressure = `${contraction || "-"} / ${relaxation || "-"}`;
    setBloodPressure(formattedBloodPressure);  
    setSavedBloodPressure(formattedBloodPressure);
    setIsEditingBloodPressure(false); 
  };

  
  const handleSaveBloodSugar = () => {
    const formattedBloodSugar = `${fasting || "-"} / ${postprandial || "-"}`;
    setBloodSugar(formattedBloodSugar); 
    setSavedBloodSugar(formattedBloodSugar);
    setIsEditingBloodSugar(false); 
  };
  

  
  const handleCloseEditing = () => {
    setIsEditingBloodPressure(false);
    setIsEditingBloodSugar(false);
    setIsEditingMedicineHistory(false); 
  };

 
const handleAddMedicineHistory = () => {
  const updatedList = [...medicineHistoryList];

 
  if (updatedList[0] !== "") {
    updatedList.unshift(updatedList[0]);  
    updatedList[0] = "";  
  }
  setMedicineHistoryList(updatedList);
};

const handleRemoveMedicineHistory = (index: number) => {
  const updatedList = [...medicineHistoryList];
  updatedList.splice(index, 1); 
  setMedicineHistoryList(updatedList);
};


const handleChangeMedicineHistory = (text: string, index: number) => {
  const updatedList = [...medicineHistoryList];
  updatedList[index] = text;
  setMedicineHistoryList(updatedList);
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={handleCloseEditing}>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity 
                onPress={() => router.push("/(tabs)/records/healthStatusRecordList")} 
                style={styles.backButton}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Health Status</Text>
            </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, focusedInput === "disease" && styles.focusedTitle]}>
              Disease
            </Text>
            <TextInput
              style={[styles.inputField, focusedInput === "disease" && styles.focusedInput]}
              onFocus={() => setFocusedInput("disease")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

         
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, focusedInput === "allergy" && styles.focusedTitle]}>
              Allergy
            </Text>
            <TextInput
              style={[styles.inputField, focusedInput === "allergy" && styles.focusedInput]}
              onFocus={() => setFocusedInput("allergy")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, focusedInput === "bloodPressure" && styles.focusedTitle]}>
              Blood Pressure
            </Text>
            <TouchableOpacity 
              onPress={() => {
                setIsEditingBloodPressure(true); 
                setFocusedInput("bloodPressure"); 
              }}
              style={styles.bloodPressureWrapper}
            >
              <TextInput
                style={[styles.inputField, focusedInput === "bloodPressure" && styles.focusedInput]}
                keyboardType="numeric"
                value={bloodPressure}
                onChangeText={setBloodPressure}
                editable={false}
              />
              {bloodPressure !== "" && <Text style={styles.mmhgText}>mmHg</Text>}
            </TouchableOpacity>
          </View>

          {isEditingBloodPressure && (
            <View style={styles.bloodPressureContainer}>
              <Text style={styles.bloodPressureTitle}>Blood Pressure</Text>
              <View style={styles.bloodPressureRow}>
                <TouchableOpacity 
                  style={styles.bloodPressureBox} 
                  onPress={() => {
                    contractionInputRef.current?.focus();
                  }}
                >
                  <Text style={styles.bloodPressureText}>Contraction</Text>
                  <Text style={styles.valueText}>{contraction}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.bloodPressureBox} 
                  onPress={() => {
                    relaxationInputRef.current?.focus(); 
                  }}
                >
                  <Text style={styles.bloodPressureText}>Relaxation</Text>
                  <Text style={styles.valueText}>{relaxation}</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.mmhgBottom}>mmHg</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, focusedInput === "bloodSugar" && styles.focusedTitle]}>
              Blood Sugar
            </Text>
            <TouchableOpacity 
              onPress={() => {
                setIsEditingBloodSugar(true); 
                setFocusedInput("bloodSugar"); 
              }}
              style={styles.bloodPressureWrapper}
            >
              <TextInput
                style={[styles.inputField, focusedInput === "bloodSugar" && styles.focusedInput]}
                keyboardType="numeric"
                value={bloodSugar}
                onChangeText={setBloodSugar}
                editable={false} 
              />
              {bloodSugar !== "" && <Text style={styles.mmhgText}>mg/dL</Text>}
            </TouchableOpacity>
          </View>

          {isEditingBloodSugar && (
            <View style={styles.bloodSugarContainer}>
              <Text style={styles.bloodPressureTitle}>Blood Sugar</Text>
              
              <View style={styles.bloodPressureRow}>
                <TouchableOpacity 
                  style={styles.bloodPressureBox} 
                  onPress={() => {
                    fastingInputRef.current?.focus(); 
                  }}
                >
                  <Text style={styles.bloodPressureText}>Fasting</Text>
                  <Text style={styles.valueText}>{fasting}</Text>
                </TouchableOpacity>

                {/* Postprandial */}
                <TouchableOpacity 
                  style={styles.bloodPressureBox} 
                  onPress={() => {
                    postprandialInputRef.current?.focus();
                  }}
                >
                  <Text style={styles.bloodPressureText}>Postprandial</Text>
                  <Text style={styles.valueText}>{postprandial}</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.mmhgBottom}>mg/dL</Text>
            </View>
          )}
<View style={styles.inputContainer}>
  <Text style={[styles.inputLabel, focusedInput === "medicineHistory" && styles.focusedTitle]}>
    Medicine History
  </Text>
  <TouchableOpacity
    onPress={() => setIsEditingMedicineHistory(true)}
    style={styles.inputField}
  >
    <Text style={{ color: medicineHistoryList.length > 1 && medicineHistoryList[1] ? "#000" : "#A0A0A0" }}>
    {medicineHistoryList.length > 1 && medicineHistoryList[1] ? medicineHistoryList[1] : "Enter second medicine history"}
  </Text>
  </TouchableOpacity>
</View>

{isEditingMedicineHistory && (
  <View style={styles.medicineHistoryContainer}>
    <Text style={styles.bloodPressureTitle}>Medicine History</Text>

    {medicineHistoryList.map((medicine, index) => (
      <View key={index} style={styles.medicineHistoryRow}>
        <TextInput
          style={styles.medicineInputField}
          value={medicine}
          onChangeText={(text) => handleChangeMedicineHistory(text, index)}
          placeholder="Medication / Type of medication / Date taken"
          placeholderTextColor="#767676"
          editable={index === 0} 
        />
        {index === 0 && (
                      <TouchableOpacity 
                        onPress={handleAddMedicineHistory} 
                        style={styles.commonButton}
                      >
                        <Ionicons name="add" size={16} color="black" />
                      </TouchableOpacity>
                    )}
        {index !== 0 && (
          <TouchableOpacity onPress={() => handleRemoveMedicineHistory(index)} style={styles.commonButton}>
            <Ionicons name="remove" size={16} color="black" />
          </TouchableOpacity>
        )}
      </View>
    ))}
  </View>
)}

          <TextInput 
            ref={contractionInputRef} 
            style={styles.hiddenInput} 
            keyboardType="numeric" 
            value={contraction} 
            onChangeText={setContraction} 
            onFocus={() => setFocusedInput("contraction")} 
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput 
            ref={relaxationInputRef} 
            style={styles.hiddenInput} 
            keyboardType="numeric" 
            value={relaxation} 
            onChangeText={setRelaxation} 
            onFocus={() => setFocusedInput("relaxation")} 
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput 
            ref={fastingInputRef} 
            style={styles.hiddenInput} 
            keyboardType="numeric" 
            value={fasting} 
            onChangeText={setFasting} 
            onFocus={() => setFocusedInput("fasting")} 
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput 
            ref={postprandialInputRef} 
            style={styles.hiddenInput} 
            keyboardType="numeric" 
            value={postprandial} 
            onChangeText={setPostprandial} 
            onFocus={() => setFocusedInput("postprandial")} 
            onBlur={() => setFocusedInput(null)}
          />

          <View style={styles.buttonContainer}>
            {isEditingBloodPressure && (
              <TouchableOpacity 
                style={styles.saveButton1}
                onPress={handleSaveBloodPressure} 
              >
                <Text style={styles.submitText}>
                  Save
                </Text>
              </TouchableOpacity>
            )}

            {/* Save 버튼 (혈당) */}
            {isEditingBloodSugar && (
              <TouchableOpacity 
                style={styles.saveButton2}
                onPress={handleSaveBloodSugar} 
              >
                <Text style={styles.submitText}>
                  Save
                </Text>
              </TouchableOpacity>
            )}

            
            {!isEditingBloodPressure && !isEditingBloodSugar && (
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSaveBloodPressure} 
              >
                <Text style={styles.submitText}>
                  Submit
                </Text>
              </TouchableOpacity>
            )}
          </View>
          
        </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 20,
  },
  backButton: {
    left: 24,
    position: "absolute",
    zIndex: 1,
  },
  header: {
    marginTop: 16,
    flexDirection: "row",
    position: "relative",
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    flex: 1,
    color: "#000",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  inputLabel: {
    color: "#434343",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 8,
  },
  inputField: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#FFF",
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  focusedTitle: {
    color: "#0097A7",
  },
  focusedInput: {
    borderBottomColor: "#0097A7",
    borderBottomWidth: 2,
  },

  bloodPressureContainer: {
    marginTop: -250,
    paddingHorizontal: 24,
    backgroundColor:"#F5F9Fc",
    height:700,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
  },
  bloodPressureTitle:{
    fontSize: 18,
    color: "#000",
    marginBottom: 16,
    marginTop:38,
  },
  bloodPressureRow: {
    flexDirection: "row", 
    justifyContent: "space-between",
    gap: 10,
  },
  bloodPressureBox: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    height:170,
    width:170,
  },
  bloodPressureText: {
    color: "#434343",
    fontSize: 14,
    position:"absolute",
    top:16,
  },
  bloodPressureWrapper: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  valueText: {
    fontSize: 32,
    color: "#000",
    marginTop:10,
  },
  mmhgBottom: {
    textAlign: "right",
    color: "#000",
    marginTop: 15,
    fontSize: 16,
  },
  mmhgText: {
    fontSize: 12, 
    color: "#000",
  },
  hiddenInput: {
    position: "absolute",
    top: -9999,
  },

  buttonContainer: {
    flexDirection: "column",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  saveButton1: {
    position: "absolute",
    backgroundColor: "#0097A7",
    left: 30,
    bottom: 450,
    paddingHorizontal: 150, 
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center", 
    alignItems: "center", 
  },
  saveButton2: {
    position: "absolute",
    backgroundColor: "#0097A7",
    left: 30,
    bottom: 350,
    paddingHorizontal: 150, 
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center", 
    alignItems: "center", 
  },
  submitButton: {
    backgroundColor: "#0097A7",
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  mmHgText:{
    fontSize:12,
    marginRight:15,
  },
  bloodSugarContainer: {
    marginTop: -350, 
    paddingHorizontal: 24,
    backgroundColor: "#F5F9Fc",
    height: 700, 
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  medicineHistoryContainer: {
    marginTop: -450,
    paddingHorizontal: 24,
    backgroundColor: "#F5F9Fc",
    height: 700,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  medicineHistoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width:330,
    marginLeft:6,
  },
  medicineInputField: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#FFF",
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
    borderWidth: 1,
    borderColor: "#E5E5EC",
  },
 
  commonButton: {
    position:"absolute",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
    right:15,
  },
  addButtonText: {
    marginLeft: 5,
    fontSize: 13,
  },
  
});