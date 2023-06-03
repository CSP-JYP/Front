import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RegisterFaceIdScreen from './src/screens/RegisterFaceIdScreen/RegisterFaceIdScreen';
import RegisterSignScreen from './src/screens/RegisterSignScreen/RegisterSignScreen';
import AddContractScreen from './src/screens/AddContractScreen/AddContractScreen';
import CheckFaceIdScreen from './src/screens/CheckFaceIdScreen/CheckFaceIdScreen';
import SendContractScreen from './src/screens/SendContractScreen/SendContractScreen';
import CheckSignScreen from './src/screens/CheckSignScreen/CheckSignScreen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';

// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다.
const Stack = createStackNavigator();

const App = () => {
  return (
    //네비게이션의 트리를 관리해주는 컴포넌트
    <NavigationContainer>
      {/* 네비게이션 기본틀의 스택을 생성 */}
      <Stack.Navigator>
        {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="RegisterFaceId" component={RegisterFaceIdScreen}/>
        <Stack.Screen name="RegisterSign" component={RegisterSignScreen}/>
        <Stack.Screen name="AddContract" component={AddContractScreen}/>
        <Stack.Screen name="CheckFaceId" component={CheckFaceIdScreen}/>
        <Stack.Screen name="SendContract" component={SendContractScreen}/>
        <Stack.Screen name="CheckSign" component={CheckSignScreen}/>
        <Stack.Screen name="Loading" component={LoadingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
