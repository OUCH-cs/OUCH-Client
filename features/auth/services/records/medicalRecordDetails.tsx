// 초기 기록화면 Medical Record컴포넌트화

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const medicalDetail = [
  { title: "Date of visit", value: "2024.11.24" },
  { title: "Visiting Hospital", value: "Hanyang Hospital" },
  { title: "Medical Subjects", value: "sgdggsdgfg" },
  { title: "Symptoms", value: "sgdfgsdgfg" },
  { title: "Treatment Summary", value: "Hanyang Hospital" },
];

export default function MedicalRecordDetails() {
  return (
    <React.Fragment>
      {medicalDetail.map((item, index) => (
        <View
          key={index}
          style={[
            styles.recordItem,
            index === medicalDetail.length - 1 && styles.cornerRadiusBottom,
          ]}
        >
          <Text style={styles.label}>{item.title}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
    recordItemTop: {
    backgroundColor:"#FFFFFF",
    paddingLeft:16,
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  labelTop: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    marginBottom:4,
    marginTop:9,
  },
  valueTop: {
    fontSize: 14,
    color: "#656565",
    fontWeight: "400",
    marginBottom: 9,
  },
  cornerRadiusTop: {
    backgroundColor:"#FFFFFF",
    paddingLeft:16,
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
