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
import XTable from '../Table';
import { Text as XText } from 'react-native-paper';


const image = { uri: "http://10.0.2.2:80/BGImage/bgimg.jpg" };


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

    tableData = {
      columns: ['Subject', 'Attendance'],
      data: [['DSA', 88], ['ITA', 90], ['EMFT', 70], ['Laser', 89], ['Sociology of Media', 79]]
    }
    
    render(){
      return (
        <>
          {/* <ImageBackground source={image} resizeMode= "cover" style = {{flex: 1}}> */}
            <FontAwesome5 name = "book-reader" size = {55} style = {{padding: 30, marginLeft: 140, marginTop: 30, marginBottom: 10}}/>
            <XText variant="headlineMedium" style={{textAlign: 'center', marginBottom: 20}}>Attendance Records</XText>
            {/* <Table style= {{justifyContent: 'center', marginBottom: 20, marginRight: 120, marginLeft: 120}} borderStyle = {{borderRadius: 30, borderWidth: 2, borderColor: '#006D5B', flex: 20}}>
              <Row data = {'Attendance Record'} style = {{backgroundColor: '#fefdfe', height: 30,}}/>
            </Table> */}
            <XTable tableData={this.tableData}/>
            {/* <BarChart /> */}
          {/* </ImageBackground> */}
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
