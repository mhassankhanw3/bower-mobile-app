import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';

import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';

// import HomeScreen from '../screens/Home/HomeScreen';
// import Categories from '../screens/Home/AllCategory';
// import Order from '../screens/Order/MyOrder';
// import SignIn from '../screens/Auth/SignIn';
// import SignUp from '../screens/Auth/Signup';

// import AddShippingAddress from '../screens/Shipping/AddShippingAddress';
// import ResetPassword from '../screens/Auth/ResetPassword';
// import EmailVerification from '../screens/Auth/EmailVerification';

// // import SearchProduct from '../screens/Home/SearchProducts';
// import FeaturedProducts from '../screens/Home/FeaturedProduct';
// import DetailProduct from '../screens/Home/DetailedProduct';
// import CustomProducts from '../screens/Products/CustomProduct';
// import AddProduct from '../screens/Products/AddProduct';

// import AddToCart from '../screens/Order/Cart';
// import EnterPaymentDetail from '../screens/Home/EnterPaymentDetail';

// import Welcome from '../screens/Welcome/index';
// import Profile from '../screens/Profile/ProfileScreen';
// import EditProfile from '../screens/Profile/EditProfileScreen';
// import {Icons} from '../components/ui/Icon/icons';
// import SearchProduct from '../screens/Home/SearchProduct';
// import OnBoardingScreen from '../screens/Onboarding/OnBoardingScreen';
// import BusinessDetailScreen from '../screens/Business/BusinessDetailScreen';
// import ProductsDetail from '../screens/Products/ProductsDetail';
import SignIn from '../screens/Auth/SignIn';
import Signup from '../screens/Auth/Signup';
// import Pending from '../screens/Order/OrderTabs/Pending';
// import RemainingPayment from '../screens/Order/OrderTabs/RemainingPayment';
// import OntheWay from '../screens/Order/OrderTabs/OntheWay';
// import CompletedOrder from '../screens/Order/OrderTabs/CompletedOrder';
// import CanceledOrder from '../screens/Order/OrderTabs/CanceledOrder';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HeadTab = createMaterialTopTabNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{width: hp('16%'), height: hp('2.5%')}}
//       source={require('../assets/images/markazlogo.png')}
//     />
//   );
// }

// const HeaderIcons = () => {
//   return (
//     <View
//       style={{
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 30,
//       }}>
//       <TouchableOpacity>
//         <Icons.bell strokeWidth={2} size={22} color={'#070a56'} />
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Icons.bag strokeWidth={2} size={22} color={'#070a56'} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const HomeStack = () => (
//   <Stack.Navigator
//     initialRouteName="HomeScreen"
//     screenOptions={{
//       contentStyle: {
//         backgroundColor: '#FFFFFF',
//       },
//     }}>
//     <Stack.Screen
//       name="HomeScreen"
//       component={HomeScreen}
//       options={{
//         // headerTitle: props => <LogoTitle {...props} />,
//         // headerRight: props => <HeaderIcons {...props} />,
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="Categories"
//       component={Categories}
//       options={{headerShown: false}}
//     />
//     {/* <Stack.Screen
//       name="SearchProduct"
//       component={SearchProduct}
//       options={{headerShown: false}}
//     /> */}
//   </Stack.Navigator>
// );

// const OrderStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="MyOrder"
//       screenOptions={{
//         contentStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//       }}>
//       <Stack.Screen
//         name="MyOrder"
//         component={Order}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="AddToCart"
//         component={AddToCart}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const ProductsStack = () => {
//   return (
//     <Stack.Navigator
//       // initialRouteName="CustomProducts"
//       screenOptions={{
//         contentStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//       }}>
//       <Stack.Screen
//         name="CustomProducts"
//         component={CustomProducts}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="AddProduct"
//         component={AddProduct}
//         options={{headerShown: false, animation: 'slide_from_bottom'}}
//       />
//       <Stack.Screen
//         name="AddShippingAddress"
//         component={AddShippingAddress}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const AuthStack = () => (
//   <Stack.Navigator
//     initialRouteName="SignIn"
//     screenOptions={{
//       contentStyle: {
//         backgroundColor: '#FFFFFF',
//       },
//     }}>
//     <Stack.Screen
//       name="SignIn"
//       component={SignIn}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="SignUp"
//       component={SignUp}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="ResetPassword"
//       component={ResetPassword}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="EmailVerification"
//       component={EmailVerification}
//       options={{headerShown: false}}
//     />
//   </Stack.Navigator>
// );

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Profile"
//       screenOptions={{
//         contentStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//       }}>
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="EditProfile"
//         component={EditProfile}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };
// const BusinessStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="BusinessDetail"
//       screenOptions={{
//         contentStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//       }}>
//       <Stack.Screen
//         name="BusinessDetail"
//         component={BusinessDetailScreen}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const WelcomeStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="ProfileStack"
//       screenOptions={{
//         contentStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//       }}>
//       <Stack.Screen
//         name="ProfileStack"
//         component={ProfileStack}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="BusinessStack"
//         component={BusinessStack}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Welcome"
//         component={Welcome}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="AuthStack"
//         component={AuthStack}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const TabScreens = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeStack"
//       swipeEnabled={true}
//       animationEnabled={true}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let colorStyle = focused ? '#08cc65' : '#737373';
//           let sizeStyle = focused ? 19 : 18;
//           if (route.name === 'HomeStack') {
//             return (
//               <Icons.home
//                 strokeWidth={1.8}
//                 size={sizeStyle}
//                 color={colorStyle}
//               />
//             );
//           } else if (route.name === 'Categories') {
//             return (
//               <Icons.category
//                 strokeWidth={1.8}
//                 size={sizeStyle}
//                 color={colorStyle}
//               />
//             );
//           } else if (route.name === 'SearchProduct') {
//             return (
//               <Icons.search
//                 strokeWidth={2}
//                 size={sizeStyle}
//                 color={colorStyle}
//               />
//             );
//           } else if (route.name === 'OrderStack') {
//             return (
//               <Icons.order
//                 strokeWidth={1.8}
//                 size={sizeStyle}
//                 color={colorStyle}
//               />
//             );
//           } else if (route.name === 'WelcomeStack') {
//             return (
//               <Icons.user
//                 strokeWidth={1.8}
//                 size={sizeStyle}
//                 color={colorStyle}
//               />
//             );
//           }
//         },
//         tabBarLabelStyle: {
//           fontSize: 10.5,
//           fontWeight: 400,
//         },
//         tabBarActiveTintColor: '#08cc65',
//         tabBarInactiveTintColor: '#737373',
//         tabBarHideOnKeyboard: Platform.OS !== 'ios',
//         tabBarStyle: {
//           backgroundColor: '#fcfcfc',
//           height: 62,
//           // borderTopWidth: 1,
//           borderTopColor: '#fcfcfc',
//           paddingBottom: 12,
//           // gap: 10,
//           paddingTop: 12,
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignSelf: 'center',
//           // marginHorizontal: 6,
//         },
//       })}>
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//         }}
//       />
//       <Tab.Screen
//         name="Categories"
//         component={Categories}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Categories',
//         }}
//       />
//       <Tab.Screen
//         name="SearchProduct"
//         component={SearchProduct}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Search',
//         }}
//       />
//       <Tab.Screen
//         name="OrderStack"
//         component={OrderStack}
//         options={({route}) => ({
//           headerShown: false,
//           tabBarLabel: 'Order',
//         })}
//       />
//       <Tab.Screen
//         name="WelcomeStack"
//         component={WelcomeStack}
//         options={{
//           headerShown: false,
//           // animation: 'slide_from_right',
//           tabBarLabel: 'Profile',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const HeaderTabs = () => {
//   return (
//     <HeadTab.Navigator
//       initialRouteName="Pending"
//       backBehavior="initialRoute"
//       screenOptions={{
//         tabBarAndroidRipple: {borderless: true},
//         tabBarBounces: true,
//         tabBarScrollEnabled: true,
//         tabBarActiveTintColor: 'black',
//         tabBarInactiveTintColor: '#6b7280',
//         // tabBarItemStyle: {width: 120},
//         tabBarAllowFontScaling: true,
//         tabBarLabelStyle: {
//           fontSize: 14,
//           fontWeight: 500,
//           textTransform: 'capitalize',
//         },
//         tabBarStyle: {
//           backgroundColor: 'white',
//           paddingBottom: 2,
//           paddingTop: 6,
//         },
//       }}>
//       <HeadTab.Screen
//         name="Pending"
//         component={Pending}
//         options={{
//           // headerShown: false,
//           tabBarLabel: 'Pending',
//         }}
//       />
//       <HeadTab.Screen
//         name="RemainingPayment"
//         component={RemainingPayment}
//         options={{
//           // headerShown: false,
//           tabBarLabel: 'Remaining',
//         }}
//       />
//       <HeadTab.Screen
//         name="OntheWay"
//         component={OntheWay}
//         options={{
//           // headerShown: false,
//           // animationEnabled: true,
//           tabBarLabel: 'On The Way',
//         }}
//       />
//       <HeadTab.Screen
//         name="CompletedOrder"
//         component={CompletedOrder}
//         options={{
//           // headerShown: false,
//           tabBarLabel: 'Completed',
//         }}
//       />
//       <HeadTab.Screen
//         name="CanceledOrder"
//         component={CanceledOrder}
//         options={{
//           // headerShown: false,
//           tabBarLabel: 'Canceled',
//         }}
//       />
//     </HeadTab.Navigator>
//   );
// };

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="TabScreens"
        screenOptions={{
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="TabScreens"
          component={TabScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeaderTabs"
          component={HeaderTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsDetail"
          component={ProductsDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FeaturedProducts"
          component={FeaturedProducts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPaymentDetail"
          component={EnterPaymentDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsStack"
          component={ProductsStack}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
