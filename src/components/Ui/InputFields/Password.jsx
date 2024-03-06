import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icons} from '../Icons/Icon';

const PasswordInput = ({lable, placeholder, value, onChangeText}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="bg-[#fafafa] flex flex-row items-center rounded-[10px] py-1 my-2">
      <TextInput
        className="flex-1 px-4"
        style={{fontSize: hp('1.9%'), height: hp('6%')}}
        placeholder={placeholder}
        secureTextEntry={!isPasswordVisible}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} className="p-3">
        {isPasswordVisible ? (
          <Icons.eye size={22} color={`${'#0c1a30'}`} />
        ) : (
          <Icons.eyeOff size={22} color={`${'#0c1a30'}`} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
