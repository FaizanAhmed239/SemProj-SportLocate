import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
          <Image
            style={styles.Logo}
            source={require('./circle-cropped.png')}
          />
          <Image
            style={{marginBottom: 60}}
            source={require('./font-remove.png')}
          />
      </LinearGradient>
    </View>


  )
}

const styles = StyleSheet.create({
  Logo: {
    width: 285,
    height: 285,
    marginBottom: 5,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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