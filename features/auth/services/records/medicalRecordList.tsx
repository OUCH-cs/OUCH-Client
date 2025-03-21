// medicalListRecord 컴포넌트화
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const medicalData = [
    { title: "Date of visit", value: "2024.11.24" },
    { title: "Visiting Hospital", value: "Hanyang Hospital" },
    { title: "Medical Subjects", value: "Hanyang Hospital" },
    { title: "Symptoms", value: "Hanyang Hospital" },
    { title: "Treatment Summary", value: "Hanyang Hospital" },
];

export default function MedicalRecordList() {
    return (
        <>
            {medicalData.map((item, index) => (
                <View key={index}>
                    <View style={styles.date}>
                        <Text style={styles.dateText}>{item.title}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>{item.value}</Text>
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
});
