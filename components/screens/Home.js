import * as React from 'react';
import { ImageBackground, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as acc from './Accounts';
import {Table, Row, Rows} from 'react-native-table-component';
import QrScanner from '../QRScanner';
import {Tempfunc} from './Accounts';
import Location from './Location'
import {FontAwesome5} from '@expo/vector-icons'
import Register from './ForStudents';


const image = { uri: "https://i.pinimg.com/736x/77/bf/47/77bf47ef053709ad8c48d443c193af62.jpg" };


function HomeScreen({ navigation }) {
  return (
    <>
    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('storing')}
    //   />
    // </View>
  );
}


const Stack = createNativeStackNavigator();

export default class Home extends React.Component {
  constructor(props)
    {
      super(props);
      this.state={Entity:''};
    }

    render(){
      const tit = ['    Attendance Records']
      const first = ['EMFT', 78]
      const second = ['ITA', 80]
      const third = ['Sociology of Media', 89]
      const fourth = ['DSA', 94]
      const fifth = ['Laser', 68]
      const sixth = ['DSA Lab', 85]
      const seventh = ['Python Lab', 92]
      const eighth = ['EMFT Lab', 90]
      const ninth = ['Indian Constitution', 72]
      return (
        <>
          <ImageBackground source={image} resizeMode= "cover" style = {{flex: 1}}>
            <FontAwesome5 name = "book-reader" size = {55} style = {{padding: 30, marginLeft: 140, marginTop: 30, marginBottom: 30}}/>
            <Table style= {{justifyContent: 'center', marginBottom: 20, marginRight: 120, marginLeft: 120}} borderStyle = {{borderRadius: 30, borderWidth: 2, borderColor: '#006D5B', flex: 20}}>
              <Row data = {tit} style = {{backgroundColor: 'cyan', height: 30,}}/>
            </Table>
            
            <Table style= {{justifyContent: 'center', margin: (0, 5, 0, 10)}} borderStyle = {{borderRadius: 1, borderWidth: 2, borderColor: '#006D5B', flex: 20}}>
              <Row data = {first} style = {{backgroundColor: '#1EA1A1'}}/>
              <Row data = {second} style = {{backgroundColor: 'cyan'}}/>
              <Row data = {third} style = {{backgroundColor: '#1EA1A1'}}/>
              <Row data = {fourth} style = {{backgroundColor: 'cyan'}}/>
              <Row data = {fifth} style = {{backgroundColor: '#1EA1A1'}}/>
              <Row data = {sixth} style = {{backgroundColor: 'cyan'}}/>
              <Row data = {seventh} style = {{backgroundColor: '#1EA1A1'}}/>
              <Row data = {eighth} style = {{backgroundColor: 'cyan'}}/>
              <Row data = {ninth} style = {{backgroundColor: '#1EA1A1'}}/>
            </Table>
          </ImageBackground>
          {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Qr" component={QrScanner} />
            <Stack.Screen name="Loc" component={Location} />
            <Stack.Screen name = "storing" component={Register} />
          </Stack.Navigator> */}
        </>
      );
    }
};
