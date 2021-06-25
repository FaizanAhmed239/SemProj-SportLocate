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
import MapView, { Marker } from 'react-native-maps';


const icon = <FontAwesome5 name={'comments'} />;
 const App = ({navigation}) =>
 {
//setCheckedGZ(!checkedGZ) && setCheckedST(!checkedST)
  const [checkedST, setCheckedST] = useState(false);
  const [checkedGZ, setCheckedGZ] = useState(false);
  const [name, onChangeOwName] = useState(null);
  const [CNIC, onChangeOwCNIC] = useState(null);
  const [arena_name, onChangeOwArenaName ] = useState(null);
  const [choice, onChangeChoice] = useState("Sports Arena/Turf");
  const [address, onChangeOwAddress] = useState(null);
  const [region, onChangeOwRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15,
  });

  const clickHandlerST = () =>
  {
    setCheckedST(true);
    setCheckedGZ(false);
    onChangeChoice("Sports Arena/Turf");
  }

  const clickHandlerGZ = () =>
  {
    setCheckedGZ(true);
    setCheckedST(false);
    onChangeChoice("Gaming Zone");
  }

  return (
    <View style={styles.container}>
      <StatusBar  barStyle = "dark-content"   ></StatusBar>
      <View style = {styles.header}>
        <FontAwesome5 name={'bars'} size = {25} color = "white" style = {{marginLeft: 15}} />
        <TouchableOpacity onPress={() => alert('This is a button!')} style = {{marginLeft: 10}}>
            <Image
              style={styles.smallLogo}
              source={require('./smallLogo.png')}
            />
        </TouchableOpacity>
        <FontAwesome5 name={'cog'} size = {25} color = "white" style = {{marginRight: 10}} />
      </View>

      <View style = {styles.subheader}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Owner Registration</Text>
      </View>

      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
      <ScrollView>
        <View style = {{margin: 11 , backgroundColor: '#161616'}}>
            <Text style = {styles.text}> Choose an option: </Text>
            <CheckBox title='Sports Arena/Turf' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checkedST} onPress={clickHandlerST} textStyle = {{color: 'white', fontSize: 14.5}} containerStyle = {{backgroundColor: 'transparent', borderColor: 'transparent'}} checkedColor = "green" uncheckedColor = "white"/>
            <CheckBox title='Gaming Zone' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checkedGZ} onPress= {clickHandlerGZ} textStyle = {{color: 'white', fontSize: 14.5}} containerStyle = {{backgroundColor: 'transparent', borderColor: 'transparent'}} checkedColor = "green" uncheckedColor = "white"/>
            <Text style = {styles.text}> Enter your Full Name: </Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {name} onChangeText = {onChangeOwName} placeholder = "Enter your name " placeholderTextColor = 'grey' autoCapitalize = "words"/>
            <Text style = {styles.text}> Enter your CNIC: <Text style = {styles.smtext}> (without dashes and spaces)</Text></Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {CNIC} onChangeText = {onChangeOwCNIC} placeholder = "3520212345678" placeholderTextColor = 'grey' autoCapitalize = "words"/>
            <Text style = {styles.text}> Upload Your Picture: <Text style = {styles.smtext}> (Face Clarity is MUST!)</Text></Text>

            <View style = {{margin: 20, marginBottom: -5, marginTop: 9}}>
              <Button title="Upload" color="grey" onPress={() => Alert.alert('Your pictures')} />
            </View>
            
            <Text style = {styles.text}> Enter your {choice}'s name: </Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3 }} value = {arena_name} onChangeText = {onChangeOwArenaName} placeholder = "Arena/Gaming Zone Name " placeholderTextColor = 'grey' autoCapitalize = "words"/>

            <Text style = {styles.text}> Upload Your {choice}'s Pictures: </Text>
            <Text style = {styles.smtext}> (5 pictures at max!)</Text>

            <View style = {{margin: 20, marginBottom: -5, marginTop: 9}}>
              <Button title="Upload" color="grey" onPress={() => Alert.alert('place pictures')} />
            </View>

            <Text style = {styles.text}> Enter the Address: </Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {address} onChangeText = {onChangeOwAddress} placeholder = "Address" placeholderTextColor = 'grey' autoCapitalize = "words"/>

            <Text style = {styles.text}> Pin Location on Map: </Text>
            <View style = {styles.mapContainer}>
              <MapView
                style = {styles.map}
                region = {region}
                onRegionChange = {onChangeOwRegion}>

                <Marker draggable coordinate={{ latitude: 31.5204, longitude: 74.3587 }}/>

                </MapView>
            </View>

            <View style = {{marginHorizontal: 45, marginTop: 20, marginBottom: 30}}>
              <Button title="Submit" color="grey" onPress={() => navigation.navigate('DashBoard')} />
            </View>
            
        </View>
      </ScrollView>  
        
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
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
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
  mapContainer: {
    height: 300,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  map: {
    ...StyleSheet.absoluteFill,
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