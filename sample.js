import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const App = ({ navigation}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column'}}>
        <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            
        </View>

        <View style= {{flex: 16, justifyContent: 'center', alignItems: 'center',}}>
            
        </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  Logo: {
    width: 390,
    height: 390,
    alignSelf: 'center',
    marginTop: 135
  },
  LogoText: {
    alignSelf: 'center',
    marginTop:-55
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    //
  },
  textStyle: {
    justifyContent: "center", 
    alignItems: "center", 
    fontSize: 40, 
    fontWeight: 'bold', 
    fontStyle: 'italic', 
    marginBottom: 50
  },
});

export default App;