import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icons} from '../../components/Ui/Icons/Icon';
import {COLORS} from '../../theme/index';

export default function GoBackBtn({title, onPress, isIcon}) {
  const navigation = useNavigation();

  return (
    <>
      <View
        className={`flex flex-row w-full mt-2 items-center ${
          isIcon ? 'justify-between' : 'justify-normal'
        }`}>
        <Ripple
          style={{paddingVertical: hp('1.8%')}}
          rippleColor="#0000009e"
          rippleOpacity={0.4}
          rippleDuration={700}
          rippleContainerBorderRadius={30}
          rippleSize={300}
          onPress={() => navigation.goBack()}
          className="bg-transparent w-10 h-10 -left-2 z-50 flex items-center justify-center rounded-full">
          <Icons.back size={22} color={`${'#0c1a30'}`} />
        </Ripple>
        {isIcon ? (
          <Text
            style={{color: COLORS.primaryColor}}
            className={`text-[16px] flex items-end justify-end  font-medium text-right`}>
            Icon
          </Text>
        ) : (
          <Text
            style={{color: COLORS.primaryColor}}
            className={`absolute left-0 text-[16px] flex items-center justify-center mx-auto w-full font-medium text-center`}>
            {title}
          </Text>
        )}
      </View>
    </>
  );
}

// import {View, Text, Pressable, TouchableHighlight} from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';
// import {Icons} from '../Icon/icons';
// import Ripple from 'react-native-material-ripple';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// const transparent = 'rgba(0,0,0,0.5)';
// export default function BackBtn({title, navigate}) {
//   const navigation = useNavigation();

//   // Function to handle navigation go back
//   const handleGoBack = () => {
// if (navigation.canGoBack()) {
//   navigation.goBack();
// } else {
//   console.log('There is no previous screen to navigate back to.');
// }
//   };

//   return (
//     <>
//       {navigation.canGoBack() && (
//         <View className="flex flex-row w-full items-center">
//           <Ripple
//             style={{paddingVertical: hp('1.8%')}}
//             rippleColor="#e5e7eb"
//             rippleOpacity={1}
//             rippleDuration={700}
//             rippleContainerBorderRadius={30}
//             rippleSize={300}
//             onPress={handleGoBack}
//             className="bg-transparent w-10 h-10 -left-2 z-50 flex items-center justify-center rounded-full">
//             <Icons.back size={22} color={`${'#0c1a30'}`} />
//           </Ripple>
//           <Text
//             className={`text-[${COLORS.primaryColor}] absolute left-2 text-[16px] flex items-center justify-center mx-auto w-full font-medium text-center`}>
//             {title}
//           </Text>
//         </View>
//       )}
//     </>
//   );
// }
