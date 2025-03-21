// healthstatus 컴포넌트화
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const healthData = [
    { title: "Disease", value: "diabetes, colic" },
    { title: "Allergy", value: "pollen, shellfish, peach" },
    { title: "Blood pressure", value: "138 / 75", unit: "mmHg" },
    { title: "Blood sugar", value: "90 / 164", unit: "mg/dL" },
    { title: "Medicine History", value: "dermatological" },
  ];
  
  export default function HealthStatusList() {
    return (
      <>
        {healthData.map((item, index) => (
          <View key={index}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{item.title}</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>
                {item.value} {item.unit && <Text style={styles.smallText}>{item.unit}</Text>}
              </Text>
            </View>
          </View>
        ))}
      </>
    );
  }
    const styles = StyleSheet.create({
        date: {
            marginTop: 32,
            marginLeft: 24,
            marginBottom: 8,
          },
          dateText: {
            color: "#434343",
            fontSize: 14,
            fontWeight: 400,
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
            fontWeight: 400,
          },
          smallText:{
            fontSize:12,
          },
    });
