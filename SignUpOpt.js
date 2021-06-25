import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
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


const App = ({ navigation}) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1.3, justifyContent: 'center', backgroundColor: 'black', paddingBottom: 10, paddingTop:10, paddingLeft: 15}}>
            <Text style = {{fontSize: 35, color: "white", fontWeight: 'bold'}}>Let's get Started,</Text>
            <Text style = {{fontSize: 15, color: "white",}}>Sign Up to experience all app features</Text>
        </View>
        <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={styles.Logo}
              source={require('./fullLogo.png')}
            />
          </View>
        </LinearGradient>

        <View style={{flex: 4.5,backgroundColor: 'black'}}>
          <View style={{paddingTop:20}}>
            <TouchableOpacity>
              <View style={styles.buttonStyle}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                  uri: 'https://img.icons8.com/fluent/48/000000/google-logo.png',}}
                />
              <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold',marginTop: 3, marginRight:50}}>Sign Up with Google</Text>
              </View>
            </TouchableOpacity>

              <TouchableOpacity onPress = {() => navigation.navigate('SignUpEmail')}>
                <View style={styles.buttonStyle}>
                  <View style={styles.tinyLogo}>
                    <FontAwesome5 name={'envelope'} size = {28} color = "black" />
                  </View>
                  <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold', marginTop: 3}}>Sign Up with Email</Text>
                </View>
              </TouchableOpacity>

              <View style = {{flexDirection: 'row', justifyContent: 'center', marginBottom: 2, marginTop: -6}}>
                <Text style = {{fontSize: 15, color: "white", alignSelf: 'center', marginTop: -3}}>Owner? Get your place </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('OwnerReg')}>
                  <Text style = {{fontSize: 15, color: "#20A7DB", fontWeight: 'bold', marginBottom: 3}}>Registered</Text>
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
        
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    Logo: {
      width: 400,
      height: 400,
    },
    linearGradient: {
      flex: 6,
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
      marginBottom: 20,
    },
    tinyLogo: {
      width: 30,
      height: 30,
      marginRight:48
    },

  });
  
  export default App;