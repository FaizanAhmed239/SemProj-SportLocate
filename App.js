import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Flex from './Flex.js';
import SplashScreen from './SplashScreen.js';
import OwnerReg from './OwnerReg.js';
import SignUpOpt from './SignUpOpt.js'
import SignUpEmail from './SignUpEmail.js'
import DashBoard from './DashBoard.js'
import SignIn from './SignIn.js'

import sample from './sample.js'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="sample" component={sample} options={{ headerShown: false}}/>

        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUpOpt" component={SignUpOpt} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} options={{ headerShown: false}}/>
        <Stack.Screen name="OwnerReg" component={OwnerReg} options={{ headerShown: false }}/>
        <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    fontSize: 100,
    alignItems: "center"
  },
  mainview:{
    flex:1,
  },
});

export default App;
