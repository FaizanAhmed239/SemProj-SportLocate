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
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const App = ({ navigation}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
        <TouchableOpacity onPress = {() => navigation.navigate('Flex')}>
            <Image
              style={styles.Logo}
              source={require('./3.png')}
            />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  Logo: {
    width: 375,
    height: 375,
    marginBottom: 20,
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