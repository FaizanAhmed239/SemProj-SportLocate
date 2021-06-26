import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//import Flex from './Flex.js';
//import sample from './sample.js'

import SplashScreen from './SplashScreen.js';
import OwnerReg from './OwnerReg.js';
import SignUpOpt from './SignUpOpt.js'
import SignUpEmail from './SignUpEmail.js'
import DashBoard from './DashBoard.js'
import SignIn from './SignIn.js'
import SignInOpt from './SignInOpt.js'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


GoogleSignin.configure({
  webClientId: '688143256686-em4iib976qsh1tr25rk8ribn3kbgat5a.apps.googleusercontent.com',
});

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        {/*<Stack.Screen name="sample" component={sample} options={{ headerShown: false}} />*/} 

        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="SignInOpt" component={SignInOpt} options={{ headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUpOpt" component={SignUpOpt} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} options={{ headerShown: false}}/>
        <Stack.Screen name="OwnerReg" component={OwnerReg} options={{ headerShown: false }}/>
        <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}}/>
      </Stack.Navigator> 

      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={sample}/>
        <Drawer.Screen name="Flex" component={Flex}/>
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}



export default App;
