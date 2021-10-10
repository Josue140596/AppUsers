import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
//Components Screens
import HomeScreen from '../screens/HomeScreen';
import SigInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};
export type NavigationProps = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignInScreen"
        component={SigInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
