import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
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

const App = () => {
//setCheckedGZ(!checkedGZ) && setCheckedST(!checkedST)
  const [checkedST, setCheckedST] = useState(false);
  const [checkedGZ, setCheckedGZ] = useState(false);
  const [name, onChangeName] = useState(null);
  const [CNIC, onChangeCNIC] = useState(null);
  const [arena_name, onChangeArenaName ] = useState(null);
  const [choice, onChangeChoice] = useState(null);

  const clickHandlerST = () =>
  {
    if(checkedST == false && checkedGZ == false)
    {
      setCheckedST(!checkedST);
    }
    else
    {
      setCheckedST(!checkedST);
      setCheckedGZ(!checkedGZ);
    }
    choiceHandler();
  }

  const clickHandlerGZ = () =>
  {
    if(checkedGZ == false && checkedST == false)
    {
      setCheckedGZ(!checkedGZ);
    }
    else
    {
      setCheckedGZ(!checkedGZ);
      setCheckedST(!checkedST);
    }
    choiceHandler();
  }

  const choiceHandler = () =>
  {
    if (checkedGZ == true)
    {
      onChangeChoice("Gaming Zone");
    }
    else
    {
      onChangeChoice("Sports Arena/Turf");
    }
  }
 

  return (
    <View style={styles.container}>
      <StatusBar  barStyle = "dark-content"   ></StatusBar>
      <View style = {styles.header}>
        <FontAwesome5 name={'bars'} size = {25} color = "white" style = {{marginLeft: 15}} />
        <TouchableOpacity onPress={() => alert('This is a button!')} style = {{marginLeft: 10}}>
            <Image
              style={styles.smallLogo}
              source={require('./2.png')}
            />
        </TouchableOpacity>
        <FontAwesome5 name={'cog'} size = {25} color = "white" style = {{marginRight: 10}} />
      </View>

      <View style = {styles.subheader}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Owner Registration</Text>
      </View>

      <LinearGradient colors={['#389c38', '#5ea75e', '#007f00']} style={styles.linearGradient}>
      <ScrollView>
        <View style = {{margin: 15, backgroundColor: '#161616'}}>
            <Text style = {styles.text}> Choose an option: </Text>
            <CheckBox title='Sports Arena/Turf' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checkedST} onPress={clickHandlerST} textStyle = {{color: 'white', fontSize: 14.5}} containerStyle = {{backgroundColor: 'transparent', borderColor: 'transparent'}} checkedColor = "green" uncheckedColor = "white"/>
            <CheckBox title='Gaming Zone' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={checkedGZ} onPress= {clickHandlerGZ} textStyle = {{color: 'white', fontSize: 14.5}} containerStyle = {{backgroundColor: 'transparent', borderColor: 'transparent'}} checkedColor = "green" uncheckedColor = "white"/>
            <Text style = {styles.text}> Enter your Full Name: </Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {name} onChangeText = {onChangeName} placeholder = "Enter your name " placeholderTextColor = 'grey' autoCapitalize = "words"/>
            <Text style = {styles.text}> Enter your CNIC: <Text style = {styles.smtext}> (without dashes and spaces)</Text></Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3}} value = {CNIC} onChangeText = {onChangeCNIC} placeholder = "3520212345678" placeholderTextColor = 'grey' autoCapitalize = "words"/>
            <Text style = {styles.text}> Upload Your Picture: <Text style = {styles.smtext}> (Face Clarity is MUST!)</Text></Text>

            <View style = {{margin: 20, marginBottom: -5}}>
              <Button title="Upload" color="grey" onPress={() => Alert.alert('STFU')} />
            </View>
            
            <Text style = {styles.text}> Enter your {choice} name: </Text>
            <TextInput style = {{color: '#e5e4e2', borderBottomWidth: 1, borderBottomColor: 'white' ,borderBottomRightRadius: 30 , marginTop: -7, marginLeft: 3 }} value = {arena_name} onChangeText = {onChangeArenaName} placeholder = "Arena/Gaming Zone Name " placeholderTextColor = 'grey' autoCapitalize = "words"/>
            
        </View>
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
});

//<CheckBox center title='Click Here' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.checked}/>
export default App;