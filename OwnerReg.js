import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert, 
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'

/*
const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={() => alert('This is a button!')}
  >
    Login with Facebook
  </Icon.Button>
);
*/
const icon = <FontAwesome5 name={'comments'} />;

const App = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "#fff" barStyle = "dark-content"   ></StatusBar>
      <View style = {{flex: 1, backgroundColor: '#211d1d', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <FontAwesome5 name={'bars'} size = {30} color = "white" style = {{marginLeft: 15}} />
        <TouchableOpacity onPress={() => alert('This is a button!')} style = {{marginLeft: 10}}>
            <Image
              style={styles.smallLogo}
              source={require('./2.png')}
            />
        </TouchableOpacity>
        <FontAwesome5 name={'cog'} size = {30} color = "white" style = {{marginRight: 10}} />
      </View>

      <View style = {{alignItems: 'center', backgroundColor: '#211d1d'}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Owner Registration</Text>
      </View>

      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
        <ScrollView>
          <Text> </Text>
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Choose an option: </Text>
          <CheckBox center title='Click Here' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.checked}
/>
        </ScrollView>
        
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
    flex: 7.5,
    flexDirection: 'column',
  },
  smallLogo: {
    width: 90,
    height: 90,
    marginTop: 10
  },
  text: {
    fontSize: 42,
  },
});

export default App;