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
        <View style= {{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}>
              <Image
                style={styles.Logo}
                source={require('./2.png')}
              />
              <Image
                style={styles.LogoText}
                source={require('./font-remove.png')}
              />
          </TouchableOpacity>
        </View>
        
      </LinearGradient>
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