import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import {COLORS} from '../../theme/index';

export default function Button({title, navigate}) {
  const navigation = useNavigation();
  return (
    <Ripple
      className={`max-w-full w-full mx-auto flex items-center justify-center rounded-xl shadow-md shadow-gray-700`}
      onPress={() => navigate && navigation.navigate(navigate)}
      style={{
        paddingVertical: hp('1.8%'),
        backgroundColor: COLORS.secondaryColor,
      }}
      rippleColor="#0000009e"
      rippleOpacity={0.1}
      rippleDuration={1200}
      rippleContainerBorderRadius={8}
      rippleSize={600}>
      <Text
        className={`font-medium`}
        style={{fontSize: hp('2.1%'), color: COLORS.lightColor}}>
        {title}
      </Text>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // width: 250,
    // height: 100,
    // backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
