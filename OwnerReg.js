import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const App = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "#fff" barStyle = "dark-content"   ></StatusBar>
      <View style = {{flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: '#211d1d'}}>
        <TouchableOpacity onPress={() => alert('This is a button!')}>
            <Image
              style={styles.smallLogo}
              source={require('./2.png')}
            />
        </TouchableOpacity>
      </View>

      <View style = {{alignItems: 'center', backgroundColor: '#211d1d'}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Owner Registration</Text>
      </View>

      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
        <View style = {{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{fontSize: 40}}>Hello World!</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  linearGradient: {
    flex: 9,
    flexDirection: 'column',
  },
  smallLogo: {
    width: 77,
    height: 77,
    marginTop: 10
  }
});

export default App;