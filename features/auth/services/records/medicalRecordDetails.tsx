// 초기 기록화면 Medical Record컴포넌트화

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MedicalRecordDetails() {
  return (
    <React.Fragment>
      <View style={styles.recordItemTop}>
        <Text style={styles.labelTop}>Date of visit</Text>
        <Text style={styles.valueTop}>2024.11.24</Text>
      </View>
      <View style={styles.recordItemTop}>
        <Text style={styles.labelTop}>Visiting Hospital</Text>
        <Text style={styles.valueTop}>Hanyang Hospital</Text>
      </View>
      <View style={styles.recordItemTop}>
        <Text style={styles.labelTop}>Medical Subjects</Text>
        <Text style={styles.valueTop}>sgdfgsdgfg</Text>
      </View>
      <View style={styles.recordItemTop}>
        <Text style={styles.labelTop}>Symptoms</Text>
        <Text style={styles.valueTop}>sgdfgsdgfg</Text>
      </View>
      <View style={styles.cornerRadiusTop}>
        <Text style={styles.labelTop}>Treatment Summary</Text>
        <Text style={styles.valueTop}>asdfasdfasasdfasdfasdfasf</Text>
      </View>
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