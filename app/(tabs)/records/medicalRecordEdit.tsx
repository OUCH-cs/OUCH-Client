import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function MedicalRecordListEdit1() {
  const router = useRouter();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [date, setDate] = useState<{ year: string | null, month: string | null, day: string | null }>({
    year: null,
    month: null,
    day: null,
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString(); 
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0"); 
    const currentDay = currentDate.getDate().toString().padStart(2, "0"); 

    setDate({
      year: currentYear.slice(2), 
      month: currentMonth,
      day: currentDay,
    });
  }, []);

  const handleDateChange = (value: string, type: string) => {
    setDate((prevDate) => ({
      ...prevDate,
      [type]: value,
    }));
  };


  useEffect(() => {
    if (date.year && date.month && date.day) {
      const fullYear = parseInt(date.year, 10) >= 75 && parseInt(date.year, 10) <= 99
        ? `19${date.year}` 
        : parseInt(date.year, 10) >= 0 && parseInt(date.year, 10) <= 40
        ? `20${date.year}` 
        : `20${date.year}`; 
      setFormattedDate(`${fullYear}.${date.month}.${date.day}`);
    }
  }, [date]);


  const handleOutsidePress = () => {
    setDatePickerVisibility(false);
    Keyboard.dismiss(); 
  };


  const handleSaveDate = () => {
    setDatePickerVisibility(false);
    const fullYear = parseInt(date.year, 10) >= 75 && parseInt(date.year, 10) <= 99
        ? `19${date.year}`
        : parseInt(date.year, 10) >= 0 && parseInt(date.year, 10) <= 40
        ? `20${date.year}`
        : `20${date.year}`;
    setFormattedDate(`${fullYear}.${date.month}.${date.day}`);
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => router.push("/(tabs)/records/medicalRecordList")}
                style={styles.backButton}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Medical Record</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.date}>
                <Text style={[styles.dateText, focusedInput === "date" && styles.focusedTitle]}>
                  Date of visit
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.list, focusedInput === "date" && styles.focusedList]}
                onPress={() => setDatePickerVisibility(true)} 
              >
                <Text style={styles.listText}>{formattedDate || "Select a date"}</Text> 
              </TouchableOpacity>
              <View style={styles.date}>
                <Text style={[styles.dateText, focusedInput === "hospital" && styles.focusedTitle]}>
                  Visiting Hospital
                </Text>
              </View>
              <View style={[styles.list, focusedInput === "hospital" && styles.focusedList]}>
                <TextInput
                  style={[styles.listText, focusedInput === "hospital" && styles.focusedText]}
                  onFocus={() => setFocusedInput("hospital")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              <View style={styles.date}>
                <Text style={[styles.dateText, focusedInput === "subjects" && styles.focusedTitle]}>
                  Medical Subjects
                </Text>
              </View>
              <View style={[styles.list, focusedInput === "subjects" && styles.focusedList]}>
                <TextInput
                  style={[styles.listText, focusedInput === "subjects" && styles.focusedText]}
                  onFocus={() => setFocusedInput("subjects")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              <View style={styles.date}>
                <Text style={[styles.dateText, focusedInput === "symptoms" && styles.focusedTitle]}>
                  Symptoms
                </Text>
              </View>
              <View style={[styles.list, focusedInput === "symptoms" && styles.focusedList]}>
                <TextInput
                  style={[styles.listText, focusedInput === "symptoms" && styles.focusedText]}
                  onFocus={() => setFocusedInput("symptoms")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              <View style={styles.date}>
                <Text style={[styles.dateText, focusedInput === "summary" && styles.focusedTitle]}>
                  Treatment Summary
                </Text>
              </View>
              <View style={[styles.list, focusedInput === "summary" && styles.focusedList]}>
                <TextInput
                  style={[styles.listText, focusedInput === "summary" && styles.focusedText]}
                  onFocus={() => setFocusedInput("summary")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>

        {isDatePickerVisible && (
          <View style={styles.pickerContainer}>
            <View style={styles.pickerHeader}>
              <Text style={styles.dateOfVisitTitle}>Date of visit</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.pickerScroll}>
              <View style={[styles.pickerWrapper]}>
                <Text style={styles.pickerLabel}>YY</Text>
                <Picker
                  selectedValue={date.year}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleDateChange(itemValue, "year")}
                >
                  {[...Array(66).keys()].map((i) => { 
                    const year = (1975 + i).toString().slice(2); 
                    return <Picker.Item key={year} label={year} value={year} />;
                  })}
                </Picker>
              </View>
              <View style={[styles.pickerWrapper]}>
                <Text style={styles.pickerLabel}>MM</Text>
                <Picker
                  selectedValue={date.month}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleDateChange(itemValue, "month")}
                >
                  {[...Array(12).keys()].map((i) => {
                    const month = (i + 1).toString().padStart(2, "0"); 
                    return <Picker.Item key={month} label={month} value={month} />;
                  })}
                </Picker>
              </View>

              <View style={[styles.pickerWrapper]}>
                <Text style={styles.pickerLabel}>DD</Text>
                <Picker
                  selectedValue={date.day}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleDateChange(itemValue, "day")}
                >
                  {[...Array(31).keys()].map((i) => {
                    const day = (i + 1).toString().padStart(2, "0"); 
                    return <Picker.Item key={day} label={day} value={day} />;
                  })}
                </Picker>
              </View>
            </ScrollView>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveDate}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.saveButtonText}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  date: {
    marginTop: 32,
    marginLeft: 24,
    marginBottom: 8,
  },
  dateText: {
    color: "#434343",
    fontSize: 14,
    fontWeight: "400",
  },
  list: {
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  listText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "400",
  },
  focusedTitle: {
    color: "#0097A7",
  },
  focusedList: {
    borderBottomColor: "#0097A7",
    borderBottomWidth: 1,
  },
  pickerContainer: {
    backgroundColor: "#F5F9FC",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 97,
    paddingTop: 48,
    zIndex: 1000,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  pickerHeader: {
    position: "absolute",
    left: 24,
    top: 30,
    zIndex: 1,
  },
  dateOfVisitTitle:{
    fontSize:18,
    fontWeight:400,
  },
  pickerScroll: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  pickerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: -100,
    height: 200,
  },
  pickerLabel: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
    marginBottom: 5,
    backgroundColor:"#FFFFFF"
  },
  picker: {
    height: 130,
    width: 90,
  },
  saveButton: {
    backgroundColor: "#0097A7",
    paddingVertical: 12,
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom:-70,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: "#0097A7",
    paddingVertical: 12,
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom:20,
    borderRadius: 10,
    alignItems: "center",
  },
});
