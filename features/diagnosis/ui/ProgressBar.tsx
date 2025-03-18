import { Label } from "@/shared/components/label/Label";
import theme from "@/shared/styles/theme";
import { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

interface ProgressBarProps {
  progress: number;
  currentStep: string;
}

// 진행률 바 컴포넌트
const ProgressBar = ({ progress, currentStep}: ProgressBarProps) => {
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(animatedWidth, {
        toValue: progress,
        duration: 300, 
        useNativeDriver: false,
      }).start();
    }, [progress]);
  
    return (
      <View>
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: animatedWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
        <Label style={styles.progressText}>{currentStep} of 5</Label>
      </View>
    );
  };
  
  export default ProgressBar;
  
  const styles = StyleSheet.create({
    progressBarContainer: {
      position: "relative",
      height: 8, 
      backgroundColor: theme.colors.white,
      borderRadius: 100,
      overflow: "hidden",
      marginBottom:8,
      marginHorizontal:16,
    },

    progressBar: {
      height: "100%",
      borderRadius: 100,
      backgroundColor: theme.colors.secondary,
    },

    progressText: {
      alignSelf: "flex-end",
      color:theme.colors.gray_7,
      marginRight:16
    }
  });