import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useEffect} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
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
  Button
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function SignInGoogle() {
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
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
       { /* <Text>Login</Text> */}
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    fontSize: 100,
    alignItems: "center"
  },
  mainview:{
    flex:1,
  },
});

const App = ({navigation}) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>

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
            <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
              <View style={styles.buttonStyle}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                  uri: 'https://img.icons8.com/fluent/48/000000/google-logo.png',}}
                />
              <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold',marginTop: 3, marginRight:50}}>Sign In with Google</Text>
              </View>
            </TouchableOpacity>

              <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}>
                <View style={styles.buttonStyle}>
                  <View style={styles.tinyLogo}>
                    <FontAwesome5 name={'envelope'} size = {28} color = "black" />
                  </View>
                  <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold', marginTop: 3}}>Sign In with Email</Text>
                </View>
              </TouchableOpacity>

              <View style = {{flexDirection: 'row', justifyContent: 'center', margin: -1}}>
                <Text style = {{fontSize: 15, color: "white", alignSelf: 'center', marginBottom: 0}}>Don't have an account? </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('SignUpOpt')}>
                  <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold', marginBottom: 0}}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              
        </View>
        
        <SignInGoogle/>
      </View>
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
      padding:7,
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
      marginRight:50,
    },

  });
  
  export default App;