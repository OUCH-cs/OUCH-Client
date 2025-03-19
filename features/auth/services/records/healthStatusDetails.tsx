// 초기 기록화면 health Status컴포넌트화

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HealthStatusDetails() {
  return (
    <React.Fragment>
    <View style={styles.recordItemBottom}>
              <Text style={styles.labelBottom}>Disease</Text>
              <Text style={styles.valueBottom}>asdfasdfasd</Text>
            </View>
            <View style={styles.recordItemBottom}>
              <Text style={styles.labelBottom}>Allergy</Text>
              <Text style={styles.valueBottom}>asdfasdfasd</Text>
            </View>
            <View style={styles.cornerRadiusBotttom}>
              <Text style={styles.labelBottom}>Blood pressure</Text>
              <Text style={styles.valueBottom}>asdfasdfasd</Text>
            </View>
            </React.Fragment>
  );
}
const styles = StyleSheet.create({
    recordItemBottom: {
        backgroundColor:"#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
        borderBottomColor: "#E5E7EB",
      },
      cornerRadiusBotttom: {
        backgroundColor:"#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
        borderBottomColor: "#E5E7EB",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      labelBottom: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000",
        marginVertical: 9,
        marginLeft:16,
      },
      valueBottom: {
        fontSize: 14,
        color: "#656565",
        fontWeight: "400",
        marginVertical: 9,
        marginRight:16,
      },
});