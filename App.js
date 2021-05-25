import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Flex from './Flex.js';
import SplashScreen from './SplashScreen.js';

const Stack = createStackNavigator();

function App({ navigate}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Flex" component={Flex} options={{ headerShown: false }}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
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
