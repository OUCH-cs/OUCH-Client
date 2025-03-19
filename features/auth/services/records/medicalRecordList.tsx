// medicalListRecord 컴포넌트화
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function medicalRecordList() {
    return (
        <React.Fragment>
        <View style={styles.date}>
            <Text style={styles.dateText}>Date of visit</Text>
        </View>

        <View style={styles.list}>
            <Text style={styles.listText}>2024.11.24</Text>
        </View>

        <View style={styles.date}>
            <Text style={styles.dateText}>Visiting Hospital</Text>
        </View>

        <View style={styles.list}>
            <Text style={styles.listText}>Hanyang Hospital</Text>
        </View>

        <View style={styles.date}>
            <Text style={styles.dateText}>Medical Subjects</Text>
        </View>

        <View style={styles.list}>
            <Text style={styles.listText}>Hanyang Hospital</Text>
        </View>

        <View style={styles.date}>
            <Text style={styles.dateText}>Symptoms</Text>
        </View>

        <View style={styles.list}>
            <Text style={styles.listText}>Hanyang Hospital</Text>
        </View>

        <View style={styles.date}>
            <Text style={styles.dateText}>Treatment Summary</Text>
        </View>

        <View style={styles.list}>
            <Text style={styles.listText}>Hanyang Hospital</Text>
        </View>
        </React.Fragment>
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