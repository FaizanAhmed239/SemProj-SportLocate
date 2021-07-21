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
  SafeAreaView
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';


const App = ({navigation}) =>
{
    const [userName, onChangeUserName] = useState(null);
    const [userEmail, onChangeUserEmail] = useState(null);
    const [userPassword, onChangeUserPassword] = useState(null);
    const [userPasswordReConfirm, onChangeUserPasswordReConfirm] = useState(null);

    //setCheckedGZ(!checkedGZ) && setCheckedST(!checkedST)
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar  barStyle = "dark-content"   ></StatusBar>
          <View style = {styles.header}>
            <TouchableOpacity onPress={() => alert('This is a button!')} style = {{marginLeft: 10}}>
                <Image
                style={styles.smallLogo}
                source={require('./smallLogo.png')}
                />
            </TouchableOpacity>
          </View>
          <View style = {styles.subheader}>
            <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Sign In</Text>
          </View>

          <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
            <View style = {{margin: 11 , backgroundColor: '#161616'}}>
                <View style = {{justifyContent: 'center', padding: 5, paddingTop: 100, paddingBottom: 60, marginTop: 70, marginLeft: 10}}>
                    <Text style = {styles.text}> Email: </Text>
                    <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {userEmail} onChangeText = {onChangeUserEmail} placeholder = "Enter your E-mail " placeholderTextColor = 'grey' />

                    <Text style = {styles.text}> Password: </Text>
                    <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {userPassword} onChangeText = {onChangeUserPassword} placeholder = "Password " placeholderTextColor = 'grey'/>
                    
                    <View style = {{marginHorizontal: 45, marginTop: 50, marginBottom: 30}}>
                        <Button title="Sign In" color="grey" onPress={() => navigation.navigate('DashBoard')} />
                    </View>

                    <View style = {{flexDirection: 'column', justifyContent: 'center', margin: -1, marginTop: 30}}>
                        <Text style = {{fontSize: 15, color: "white", alignSelf: 'center'}}>Don't have an account? </Text>
                        <TouchableOpacity onPress = {() => navigation.navigate('SignUpOpt')}>
                        <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold', alignSelf: 'center', marginTop: 3}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
        </SafeAreaView>
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

//<CheckBox center title='Click Here' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.checked}/>
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
export default App;