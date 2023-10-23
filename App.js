import * as React from 'react';
import * as Location from 'expo-location'
// import React, {useEffect, useState} from "react";
import { Text, StyleSheet } from 'react-native';
import { Card, Provider, BottomNavigation } from 'react-native-paper';
import Home from './components/screens/Home';
import Classes from './components/screens/Classes';
import Account from './components/screens/Accounts';
import AppBar from './components/AppBar';
import QRScanner from './components/QRScanner'
// import Location from './components/screens/Location'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForStudents from './components/screens/ForStudents';
import ForFaculty from './components/screens/ForFaculty';

global.locc = ''
global.name = 'AkshatSrivastava'
global.rollno = '12345'
global.flag = 1

export function flagging(){
  flag = 0;
  // alert('entered flagging'+flag);
}
export function flagging2(){
  flag = 1;
  // alert('entered flagging2'+flag);
}

function abs(a){
  if(a < 0){
    a = -1*a;
    return a;
  }
  return a;
}
export function updating(rono, nme){
  global.name = mne;
  global.rollno = rono;
  alert(this.name+this.rollno);
}


export function comp(data){
  const ara1 = data.split(",");
  const ara2 = locc.split(",");
  if(abs(ara1[0]-ara2[0]) < 1.000200 && abs(ara1[1]-ara2[1]) < 1.000200 && flag == 0){
    alert('Same')
    var InsertAPIURL = "http://192.168.170.59/api/inserting.php";
    
    var headers={
        'Accept':'*/*',
        'Content-Type':'application/json'
    };
    
    var Data={
      RollNoo: '122',
      StudentNamee:'name'
    };
    fetch(InsertAPIURL,
      {
        method:'POST',
        headers:headers, 
        body: JSON.stringify(Data)
      }
      )
    .then((response)=>response.json())
    .then((response)=>
    {
      alert('Marked Present');
    })
    .catch((error)=>
    {
      alert("Error: "+error);
    })
  }
  else if(flag == 1){
    alert('QR No Longer Accepting responses!')
  }
  else{
    alert('Not Marked')
    // alert('NotSame '+' data is '+data+ ' locc is '+locc)
  }
}

const Stack = createNativeStackNavigator();

const App = () => {
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [xparam, yparam, setParams] = React.useState(null);

  React.useEffect(() =>{
    load()
  }, [])  
  async function load(){
    setErrorMessage(null)
    try{
      let {status} = await Location.requestForegroundPermissionsAsync()
      // alert('Entered try '+status)
      if(status !== 'granted'){
        setErrorMessage('Allow Location Access to enter the app')
        alert('Returning')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      const {latitude, longitude} = location.coords
      // alert(`Your Current Location is: ${latitude}, ${longitude}`)
      var data = `${latitude} , ${longitude}`
      locc = data.replace( /^\D+/g, '');
      // alert(locc);
    }
    catch(error){
        setErrorMessage(error.message);
    }
  }
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'classes', title: 'Classes', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline' },
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'tempo', title: 'Faculty', focusedIcon: 'account-tie', unfocusedIcon: 'account-tie-outline'}
  ]);

  const navigationRef = React.createRef();

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    classes: Classes,
    account: Account,
    qr: QRScanner,
    // loc:Location
    tempo:ForFaculty
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <AppBar navigationRef={navigationRef} />
      <Stack.Navigator initialRouteName="BottomNav" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNav" children={ () =>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      } />
      <Stack.Screen name="QrScanner" component={QRScanner} />
      {/* <Stack.Screen name="Location" component={Location} /> */}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;