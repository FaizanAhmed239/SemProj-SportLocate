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
      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
          <TouchableOpacity onPress = {() => navigation.navigate('SignInOpt')}>
              <Image
                style={styles.Logo}
                source={require('./smallLogo.png')}
              />
              <View style = {{marginTop: -60, marginBottom: 30}}>
                <Image
                  style={styles.LogoText}
                  source={require('./font-remove.png')}
                />
              </View>
              
          </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  Logo: {
    width: 390,
    height: 390,
    alignSelf: 'center'
  },
  LogoText: {
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center' 
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