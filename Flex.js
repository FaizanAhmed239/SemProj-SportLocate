import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from "react-native";
import 'react-native-gesture-handler';

//TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Flex = ({navigation}) => {
  return (
    //View 1 which consists of App Title, Favorite and Settings Icon
    <View style={styles.mainview}>
        <View style={{ flex: 2.2, flexDirection: "column" }}>
          <View style={{ flex: 1, backgroundColor: "#2a8888", flexDirection: "row"}}>
            <Text style={{fontSize: 20, color: '#e0e0e0', marginTop: 7, marginHorizontal: 10 }}>🤍</Text>
            <Text style={{fontSize: 20.5, fontWeight: 'bold', color: '#e0e0e0', marginTop: 7, marginHorizontal: 72 }}> Tafheem Ul Quran </Text>
            <Text style={{fontSize: 20, color: '#e0e0e0', marginTop: 7, marginHorizontal: -7 }}>⚙️</Text>
          </View>         
        </View>
    
        <View style={{ flex: 2, backgroundColor: "#e0e0e0" }}>
          <Text style={{textAlign:'left', justifyContent: 'space-around',fontSize: 15, marginTop: 9, color: 'grey'}}>    Search Surah Number or Name </Text> 
        </View>

        <View style={{ flex: 30, backgroundColor: "#ebedec", paddingVertical: 7, paddingHorizontal: 8, paddingBottom: 8,  elevation: 15, borderRadius: 20, justifyContent: 'space-between'}}>
          <TouchableOpacity onPress = {() => navigation.navigate('SplashScreen')}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   1  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Al-Faatiha</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Meccan - Verses:7</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> الفاتحة</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('SplashScreen')}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   2  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Al-Baqara</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Medinan - Verses:286</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلْبَقَرَة</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button3 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   3  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Aal-i-Imraan</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Medinan - Verses:200</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> آلِ عِمْرَان</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button4 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   4  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>An-Nisaa</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Medinan - Verses:176</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلنِّسَاء</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button5 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   5  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Al-Maaida</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Medinan - Verses:120</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلْمَائِدَة</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button6 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   6  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Al-An'am</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Meccan - Verses:165</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلْأَنْعَام</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button7 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   7  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Al-A'raf</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Meccan - Verses:206</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلْأَعْرَاف</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button8 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   8  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Al-Anfal</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Medinan - Verses:75</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلْأَنْفَال</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button9 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>   9  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>At-Tawbah</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Medinan - Verses:129</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> ٱلتَّوْبَة</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {Alert.alert("Button10 Pressed")}}>
            <View style = {{backgroundColor: 'white'}}>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", position: 'absolute', marginTop: 13}}>  10  </Text>
              <Text style = {{fontSize: 22, color: "black", fontWeight: "bold", marginHorizontal: 50, marginTop: 2}}>Yunus</Text>
              <Text style = {{color: 'black', fontWeight: "bold", marginHorizontal: 50}}>Meccan - Verses:109</Text>
              <Text style = {{fontSize: 35, color: "black", fontWeight: "bold", justifyContent: "flex-end", marginTop: -40}}> يُونُس</Text>
            </View>
          </TouchableOpacity>

        </View>       
    </View>
  );
};

const styles = StyleSheet.create({
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
  
export default Flex;
