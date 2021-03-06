import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
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
        <Text>Login</Text>
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

const App = ({ navigation}) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1.3, justifyContent: 'center', backgroundColor: 'black', paddingBottom: 10, paddingTop:10, paddingLeft: 15}}>
            <Text style = {{fontSize: 35, color: "white", fontWeight: 'bold'}}>Let's get Started,</Text>
            <Text style = {{fontSize: 15, color: "white",}}>Sign Up to experience all app features</Text>
        </View>
        <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
          <View style={{ alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Image
              style={styles.Logo}
              source={require('./fullLogo.png')}
            />
          </View>
        </LinearGradient>

        <View style={{flex: 3.2,backgroundColor: 'black', justifyContent: 'space-evenly'}}>
              <TouchableOpacity onPress = {() => navigation.navigate('SignUpEmail')}>
                <View style={styles.buttonStyle}>
                  <View style={styles.tinyLogo}>
                    <FontAwesome5 name={'envelope'} size = {28} color = "black" />
                  </View>
                  <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold', marginTop: 3}}>Sign Up with Email</Text>
                </View>
              </TouchableOpacity>

              <View style = {{flexDirection: 'row', justifyContent: 'center', marginBottom: -12, }}>
                <Text style = {{fontSize: 15, color: "white", alignSelf: 'center', }}>Owner? Get your place </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('OwnerReg')}>
                  <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold', }}>Registered</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress = {() => navigation.navigate('OwnerReg')}>
                <View style={styles.buttonStyle}>
                  <View style={styles.tinyLogo}>
                    <FontAwesome5 name={'user-tie'} size = {28} color = "black" />
                  </View>
                  <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold', marginTop: 3}}>Owner Registration</Text>
                </View>
              </TouchableOpacity>

              <View style = {{flexDirection: 'row', justifyContent: 'center', margin: -1}}>
                <Text style = {{fontSize: 15, color: "white", alignSelf: 'center', marginBottom: 0}}>Already have an account? </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}>
                  <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold', marginBottom: 0}}>Sign In</Text>
                </TouchableOpacity>
              </View>
                   
        </View>
        
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    Logo: {
      width: 500,
      height: 500,
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
      marginRight:48
    },

  });
  
  export default App;