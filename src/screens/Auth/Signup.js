import {View, Text} from 'react-native';
import React from 'react';
import GoBackBtn from '../../components/Button/GoBackBtn';
import Button from '../../components/Button/Button';

export default function Signup() {
  return (
    <View>
      <GoBackBtn title={'Continue'} />
      <Text>Signup</Text>
      <Button title={'Continue'} />
    </View>
  );
}
