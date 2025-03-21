// 초기 기록화면 health Status컴포넌트화

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HealthStatusDetail = [
  { title: "Diease", value: "asdfasdfasd" },
  { title: "Allergy", value: "asdfasdfasd" },
  { title: "Blood Pressure", value: "asdfasdfasd" },
];

export default function HealthStatusDetails() {
  return (
    <React.Fragment>
      {HealthStatusDetail.map((item, index) => (
        <View
          key={index}
          style={[
            styles.recordItemBottom,,
            index === HealthStatusDetail.length - 1 && styles.cornerRadiusBottom,
          ]}
        >
          <Text style={styles.labelBottom}>{item.title}</Text>
          <Text style={styles.valueBottom}>{item.value}</Text>
        </View>
      ))}
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