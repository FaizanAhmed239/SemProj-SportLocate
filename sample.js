import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';

const ProdData = [
  {
    id: 1,
    title: 'Turpis et laculis',
    price: 115,
    image: require('./image_pro_1.png'),
  },
  {
    id: 2,
    title: 'Turpis et laculis',
    price: 120,
    image: require('./image_pro_2.png'),
  },
  {
    id: 3,
    title: 'Turpis et Product3',
    price: 125,
    image: require('./image_pro_3.png'),
  },
  {
    id: 4,
    title: 'Turpis et Product4',
    price: 130,
    image: require('./image_pro_4.png'),
  },
  {
    id: 5,
    title: 'Turpis et Product5',
    price: 135,
    image: require('./image_pro_5.png'),
  },
];

const RListingData = [
  {
    id: 1,
    title: 'List 1',
    image: require('./health.png'),
  },
  {
    id: 2,
    title: 'List 2',
    image: require('./list.png'),
  },
  {
    id: 3,
    title: 'List 3',
    image: require('./listt.png'),
  },
];

const ItemP = ({ img, title, price }) => (
  <View style={styles.product}>
      <View style = {{borderBottomWidth: 2, borderColor: 'green', marginBottom: 10, alignItems: 'center'}}>
        <Image
          style={styles.smallLogo}
          source={img}
        />
      </View>
      <Text style = {{fontSize: 15,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>{title}</Text>
      <Text style = {{fontSize: 13,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>${price}</Text>   
  </View>
);

const ItemL = ({title, image }) => (
  <View style={styles.product}>
      <View style = {{borderBottomWidth: 2, borderColor: 'green', marginBottom: 10, alignItems: 'center'}}>
        <Image
          style={styles.smallLogo}
          source={image}
        />
      </View>
      <Text style = {{fontSize: 15,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>{title}</Text> 
  </View>
);

const EditItem = (entry) => {
  return (
<Text style = {{fontSize: 20,color: 'green', fontWeight: 'bold', marginLeft: 20, marginTop: 5}}>{entry}</Text>
  )};

const App = ({ navigation}) => {

const [search, onChangeSearch] = useState(null);  
const [data, setData] = useState([]);
const [disabled, setDisabled] = useState(true);
const [stateName, setStateName] = useState("Products");

const fetchURL = "https://thefoodpharmacy.pk/api/auth/status/10";

const useEffect = () => {
  fetch(fetchURL).then((response) => response.json()).then((json) => setData(json))
  .then(response => {
    if(data.status == "okay"){
      console.log('Data is okay');
    }else if(data.status == "error"){
      console.log('Data has error');
      setDisabled(true);
    }
  }).
  catch(error => {
    Alert.alert("Error!");
  })
};

const renderItemP = ({ item }) => (
  <ItemP img = {item.image} title={item.title} price = {item.price} />
);

const renderItemL = ({ item }) => (
  <ItemL title={item.title} image = {item.image} />
);

return (
<SafeAreaView style={{ flex: 1, flexDirection: 'column'}}>
  <View style= {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', paddingVertical: 13}}>
    <TouchableOpacity onPress={() => navigation.openDrawer('Flex')}>
      <FontAwesome5 name={'bars'} size = {25} color = "white" style = {{marginLeft: 20}} />
    </TouchableOpacity>

    <TouchableOpacity>
    <FontAwesome5 name={'ellipsis-v'} size = {25} color = "white" style = {{marginRight: 20,}} />
    </TouchableOpacity>
  </View>
  
  <ScrollView>
    <View style= {{flex: 1}}>
    <View style= {{flexDirection: 'row', backgroundColor: 'white', marginTop: 20, marginHorizontal: 20, elevation: 10}}>
      <FontAwesome5 name={'search'} size = {22} color = "green"  style = {{marginTop: 10, marginLeft: 10, marginRight: 10,}} />
      <TextInput style = {{fontSize: 17}} value = {search} onChangeText = {onChangeSearch} placeholder = "Product Name" placeholderTextColor = 'grey' autoCapitalize = "words"/>
      </View>


    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Image
            style={styles.image}
            source={require('./banner.png')}
          />
    </View>

    <TouchableOpacity onPress = {() => {}}>
      <View style={styles.buttonStyle}>
        <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold'}}>Edit</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => {useEffect}} disabled = {disabled}>
      <View style={styles.buttonStyle}>
        <Text style = {{fontSize: 17, color: "black", fontWeight: 'bold'}}>    Disabled Or Not?    </Text>
      </View>
    </TouchableOpacity>

    <Text style = {{fontSize: 20,color: 'green', fontWeight: 'bold', marginLeft: 20}}>Products</Text>

    <View style = {{marginTop: 5, marginBottom: -60}}>
      <FlatList
        data={ProdData}
        renderItem={renderItemP}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
    

    <Text style = {{fontSize: 20,color: 'green', fontWeight: 'bold', marginLeft: 20}}>Related Listing</Text>

      <View style = {{marginTop: 5, marginBottom: -40}}>
        <FlatList
          data={RListingData}
          renderItem={renderItemL}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </View>
  </ScrollView>

</SafeAreaView>

)
}

const styles = StyleSheet.create({
  Logo: {
    width: 390,
    height: 390,
    alignSelf: 'center',
    marginTop: 135
  },
  LogoText: {
    alignSelf: 'center',
    marginTop:-55
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    //
  },
  textStyle: {
    justifyContent: "center", 
    alignItems: "center", 
    fontSize: 40, 
    fontWeight: 'bold', 
    fontStyle: 'italic', 
    marginBottom: 50
  },
  smallLogo: {
    width: 130,
    height: 130,
  },
  image: {
    width: 340,
    height: 200,
    marginVertical: 20
  },

  product: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 4,
    marginHorizontal: 5,
    marginBottom: 80
  },
  buttonStyle: {
    backgroundColor: "white",
    borderRadius: 5, 
    //justifyContent: 'center',
    borderColor: "green",
    borderWidth: 3,
    paddingHorizontal: 30,
    paddingVertical:7,
    marginRight: 30,
    alignSelf: 'center',
    marginBottom: 10
  },
});

export default App;