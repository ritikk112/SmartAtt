import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native"; 
import * as Location from 'expo-location'
import Home from './Home'

global.locc = ''

function abs(a){
  if(a < 0){
    a = -1*a;
    return a;
  }
  return a;
}

export function comp(data){
  const ara1 = data.split(",");
  const ara2 = locc.split(",");
  if(abs(ara1[0]-ara2[0]) < 0.0000200 && abs(ara1[1]-ara2[1]) < 0.0000200){
    alert('Same')
  }
  else{
    alert('NotSame '+' data is '+data+ ' locc is '+locc)
  }
}

export default function App(){
    const [errorMessage, setErrorMessage] = useState(null);
    const [xparam, yparam, setParams] = useState(null);
  
    useEffect(() =>{
      load()
    }, [])  
    async function load(){
      setErrorMessage(null)
      try{
        let {status} = await Location.requestForegroundPermissionsAsync()
        alert('Entered try '+status)
        if(status !== 'granted'){
          setErrorMessage('Allow Location Access to enter the app')
          alert('Returning')
          return
        }
        const location = await Location.getCurrentPositionAsync()
        const {latitude, longitude} = location.coords
        alert(`Your Current Location is: ${latitude}, ${longitude}`)
        var data = `${latitude} , ${longitude}`
        locc = data.replace( /^\D+/g, '');
        alert(locc);
      }
      catch(error){
          setErrorMessage(error.message);
      }
    }

}