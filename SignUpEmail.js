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
import firestore from '@react-native-firebase/firestore';
import validate from 'validate.js'

const App = ({navigation}) =>
{
  const [userName, onChangeUserName] = useState(null);
  const [userEmail, onChangeUserEmail] = useState(null);
  const [userPassword, onChangeUserPassword] = useState(null);
  const [userPasswordReConfirm, onChangeUserPasswordReConfirm] = useState(null);

  const [isdisabled, disabledState] = useState(false)

  //var validate = require("validate.js");
  const signupUsersCollection = firestore().collection('UsersSignUp');
  //const userDocument = firestore().collection('UsersSignUp').doc('ABC');
  //setCheckedGZ(!checkedGZ) && setCheckedST(!checkedST)

  const FirestoreEntry = ()  =>
  {
    signupUsersCollection.add({
      name: userName,
      email: userEmail,
      password: userPassword,
    })
    .then(() => {
      console.log('User added!');
    }).
    catch((error) => {
      console.error("Error writing document: ", error);
  })
} ;

  const CheckPass = () =>
  {
    if ( userPassword != userPasswordReConfirm)
    {
      console.log("Passwords don't match");
      Alert.alert("Your passwords don't match! Try again!");
    }
    else
    {
      //disabledState(false);
      //return true;
      console.log("Passwords Match!");
      Alert.alert("Account Created!");
      FirestoreEntry();
    }
  }

  
  return (
    <View style={styles.container}>
      <StatusBar  barStyle = "dark-content" ></StatusBar>
      <View style = {styles.header}>
          <TouchableOpacity onPress={() => alert('This is a button!')} style = {{marginLeft: 10}}>
              <Image
              style={styles.smallLogo}
              source={require('./smallLogo.png')}
              />
          </TouchableOpacity>
      </View>
      <View style = {styles.subheader}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Create Account</Text>
      </View>

      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
          <View style = {{margin: 11 , backgroundColor: '#161616'}}>
            <View style = {{justifyContent: 'center', padding: 5, paddingBottom: 30, marginTop: 50, marginLeft: 10}}>
              <Text style = {styles.text}> Full Name: </Text>
                <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {userName} onChangeText = {onChangeUserName} placeholder = "Enter your Name " placeholderTextColor = 'grey' autoCapitalize = 'words' autoCompleteType = 'name' textContentType = 'givenName'/>

                <Text style = {styles.text}> Email: </Text>
                <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {userEmail} onChangeText = {onChangeUserEmail} placeholder = "Enter your E-mail " placeholderTextColor = 'grey' autoCapitalize = 'none' autoCompleteType = 'email' textContentType = 'emailAddress'/>

                <Text style = {styles.text}> Password: </Text>
                <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {userPassword} onChangeText = {onChangeUserPassword} secureTextEntry = {true} placeholder = "Password " placeholderTextColor = 'grey' autoCapitalize = 'none' />
                
                <Text style = {styles.text}> Confirm Password: </Text>
                <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {userPasswordReConfirm} onChangeText = {onChangeUserPasswordReConfirm} secureTextEntry = {true} placeholder = "Re-enter your password " placeholderTextColor = 'grey' autoCapitalize = 'none' />

                <View style = {{marginHorizontal: 45, marginTop: 40, marginBottom: 30}}>
                  <Button title="Submit" color="grey" onPress = {CheckPass} disabled = {isdisabled} />
                </View>

                <View style = {{flexDirection: 'column', justifyContent: 'center', marginTop: 20}}>
                  <Text style = {{fontSize: 15, color: "white", alignSelf: 'center', }}>Already have an account? </Text>
                  <TouchableOpacity onPress = {() => navigation.navigate("SignInOpt")}>
                    <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold', alignSelf: 'center'}}>Sign In</Text>
                  </TouchableOpacity>
            </View>
              
              </View>
          </View>
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