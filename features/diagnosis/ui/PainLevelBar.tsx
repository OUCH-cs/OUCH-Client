import { View, StyleSheet, Platform } from 'react-native';
import { Label } from '@/shared/components/label/Label';
import theme from '@/shared/styles/theme';
import { useStore } from '../lib/useStore';
import Slider from '@react-native-assets/slider';

const PainLevelBar = () => {
    const { painLevel, setPainLevel } = useStore();

    return (
        <View style={styles.scaleContainer}>    
        <View style={styles.scaleLabelContainer}>
          <Label style={styles.scaleText}>0</Label>
          <Label style={styles.scaleText}>10</Label>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={painLevel}
            onValueChange={setPainLevel}
            minimumTrackTintColor={theme.colors.primary}
            maximumTrackTintColor={theme.colors.white_ec}
            thumbTintColor={theme.colors.primary} 
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
          />
        </View>
        <View style={styles.scaleLabelContainer}>
          <Label style={styles.scaleText}>mild</Label>
          <Label style={styles.scaleText}>severe</Label>
        </View>
      </View>
    )

}

export default PainLevelBar

export const styles = StyleSheet.create({
    sliderContainer: {
        backgroundColor:theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:100,
        paddingHorizontal:16,
        marginHorizontal:16,
        marginVertical:6,
        height:36,

      },
    
      slider: {
        flex:1,
      },

      track: {
        height: 4,
        borderRadius: 5,
      },

      thumb: {
        width: 20,
        height: 20, 
        borderRadius: 15,
      },
    
      scaleContainer :{
        marginBottom:38
      },
    
      scaleLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
      },
      
      scaleText: {
        fontSize: 14,
        color: theme.colors.gray_4,
      },
})