// healthstatus 컴포넌트화
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function healthStatusList() {
    return (
        <React.Fragment>
    <View style={styles.date}>
        <Text style={styles.dateText}>Disease</Text>
    </View>

    <View style={styles.list}>
        <Text style={styles.listText}>diabetes, colic</Text>
    </View>

    <View style={styles.date}>
        <Text style={styles.dateText}>Allergy</Text>
    </View>

    <View style={styles.list}>
        <Text style={styles.listText}>pollen, sellfish, peach</Text>
    </View>

    <View style={styles.date}>
        <Text style={styles.dateText}>Blood pressure</Text>
    </View>

    <View style={styles.list}>
        <Text style={styles.listText}>138 / 75 <Text style={styles.smallText}>mmHg</Text></Text>
    </View>

    <View style={styles.date}>
        <Text style={styles.dateText}>Blood sugar</Text>
    </View>

    <View style={styles.list}>
        <Text style={styles.listText}>90 / 164 <Text style={styles.smallText}>mg/dL</Text></Text>
    </View>

    <View style={styles.date}>
        <Text style={styles.dateText}>Medicine History</Text>
    </View>

    <View style={styles.list}>
        <Text style={styles.listText}>dermatological</Text>
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
          smallText:{
            fontSize:12,
          },
    });