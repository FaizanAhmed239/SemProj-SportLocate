import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert, 
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'


const App = ({navigation}) =>
{
    return (
    <View style={styles.container}>
        <StatusBar  barStyle = "dark-content"   ></StatusBar>
        <View style = {styles.header}>
            <TouchableOpacity onPress={() => alert('This is a button!')} style = {{marginLeft: 10}}>
                <Image
                style={styles.smallLogo}
                source={require('./2.png')}
                />
            </TouchableOpacity>
        </View>

        <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
            
        </LinearGradient>
    </View>

    )
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column',
},
header: {
    flex: 1, 
    backgroundColor: 'black',  
    alignItems: 'center', 
    justifyContent: 'center'
},
subheader: {
    alignItems: 'center', 
    backgroundColor: '#161616'
},
linearGradient: {
    flex: 7.5,
    flexDirection: 'column',
},
smallLogo: {
    width: 83,
    height: 83,
    marginTop: 10
},
text: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: 'white',
    paddingTop: 15,
},
smtext: {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: 'white',
    //paddingBottom: 10,
},
buttonStyle: {
    backgroundColor: "white",
    marginHorizontal: 45,
    padding:7,
    elevation: 20, 
    borderRadius: 5, 
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
},
tinyLogo: {
    width: 30,
    height: 30,
    marginRight:48
},
});
export default App;