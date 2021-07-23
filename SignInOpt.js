import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



function SignInAnonymously()
{
  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
    //return true;
  });
}

function LogOut()
{
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

function SignIn() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  },);

  if (initializing) return null;
  else return null;
{/*
  if (!user) {
    return (
      <Text>No user signed in!</Text>
    );
  }

  return (
    <Text>User signed in!</Text>
  );

  */
}

}

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

//<Button title = "Logout" onPress = {LogOut}/> 

const App = ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column'}}>
        < SignIn />
        
        <View style={{flex: 1.3, justifyContent: 'center', backgroundColor: '#171717', paddingBottom: 10, paddingTop:10, paddingLeft: 15, elevation: 10}}>
            <Text style = {{fontSize: 35, color: "white", fontWeight: 'bold'}}>Let's get Started,</Text>
            <Text style = {{fontSize: 15, color: "white",}}>Please Sign In to Continue</Text>
        </View>
        <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
          <View style={{ alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Image
              style={styles.Logo}
              source={require('./fullLogo.png')}
            />
          </View>
        </LinearGradient>


        <View style={{flex: 3.2,backgroundColor: '#171717', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={() => {SignInAnonymously(), navigation.navigate("DashBoard")}}>
            <View style={styles.buttonStyle}>
              <View style = {{flex: 1, justifyContent: 'flex-start'}}>
                <View style={styles.tinyLogo}>
                    <FontAwesome5 name={'user-secret'} size = {28} color = "black" />
                </View>
              </View >
              <View style = {{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold'}}>Sign In Anonymously</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!')).then(() => navigation.navigate('DashBoard'))}>
            <View style={styles.buttonStyle}>
              <View style = {{flex: 1, justifyContent: 'flex-start'}}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                  uri: 'https://img.icons8.com/fluent/48/000000/google-logo.png',}}
                />
                </View>

                <View style = {{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold'}}>Sign In with Google</Text>
                </View>
            </View>
          </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}>
              <View style={styles.buttonStyle}>
                <View style = {{flex: 1, justifyContent: 'flex-start'}}>
                  <View style={styles.tinyLogo}>
                    <FontAwesome5 name={'envelope'} size = {28} color = "black" />
                  </View>
                </View>
                <View style = {{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold'}}>Sign In with Email</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style = {{flexDirection: 'row', justifyContent: 'center', margin: -3}}>
              <Text style = {{fontSize: 15, color: "white", alignSelf: 'center'}}>Don't have an account? </Text>
              <TouchableOpacity onPress = {() => navigation.navigate('SignUpOpt')}>
                <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
              
        </View>
        
        
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    Logo: {
      width: 450,
      height: 450,
    },
    linearGradient: {
      flex: 6.6,
      flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'center'
    },
    textStyle: {
      justifyContent: "center", 
      alignItems: "center", 
      fontSize: 40, 
      fontWeight: 'bold', 
      fontStyle: 'italic', 
      marginBottom: 50
    },
    buttonStyle: {
      backgroundColor: "white",
      marginHorizontal: 45,
      padding:6,
      elevation: 20, 
      borderRadius: 5, 
      flexDirection: 'row',
      //justifyContent: 'center',
      //alignItems: 'center',
      //marginBottom: 20,
    },
    tinyLogo: {
      width: 30,
      height: 30,
    },

  });
  
  export default App;