import * as React from "react";
import { Button, ImageBackground, Text, View, ScrollView, Image, StyleSheet, useState } from "react-native";
import {Picker} from '@react-native-picker/picker';
// import XTable from '../Table';
import { Text as XText } from 'react-native-paper';
import { flagging, flagging2 } from "../../App";

const image = { uri: "https://i.pinimg.com/736x/77/bf/47/77bf47ef053709ad8c48d443c193af62.jpg" };

export default class ForFaculty extends React.Component{
  constructor(props){
    super(props);
    this.state={Findinga:''};
  }
  FindRecord=()=>
  {
      // alert('Entered FindRec');
      // this.flagging;
      flagging()
      var Findinga = 'temping';
      var InsertAPIURL = "http://192.168.170.59/api/creating.php";
      
      var headers={
          'Accept':'*/*',
          'Content-Type':'application/json'
      };
      
      var Data={
        Findinga:'tempTable'
      };
      fetch(InsertAPIURL,
          {
              method:'VIEW',
              headers:headers, 
              // body: JSON.stringify(Data)
          }
          )
        .then((response)=>response.json())
        .then((response)=>
        {
            alert("QR Now accepting Responses");
        })
        .catch((error)=>
        {
            alert("Error: "+error);
        })
        // Keyboard.dismiss();
    }
    DeleteRecord=()=>
    {
      // this.flagging2;
      flagging2();
      // alert('Entered DelRec');
      var InsertAPIURL = "http://192.168.170.59/api/exporting.php";
      
      var headers={
          'Accept':'*/*',
          'Content-Type':'application/json'
      };
      
      var Data={
        Findinga:'temping'
      };
      fetch(InsertAPIURL,
        {
          method:'POST',
          headers:headers, 
          // body: JSON.stringify(Data)
        }
        )
        .then((response)=>response.json())
        .then((response)=>
        {
          alert("Succesfully Closed!");
        })
        .catch((error)=>
        {
          alert("Error: "+error);
        })
        // Keyboard.dismiss();
      }
      render(){
      return(
        <View style = {{ flex: 4, flexDirection: 'column', padding: 20}}>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <XText variant="headlineMedium" style={{textAlign: 'center', marginBottom: 20}}>ForFaculty</XText>
        <Picker style = {{padding: 2, marginTop: 30}}>
          <Picker.Item label="Select Class" value="day" />
        </Picker>
        <Picker style = {{padding: 2}}>
          <Picker.Item label="Select Batch" value="day" />
        </Picker>
        <View style = {{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 100}}>
          <View style = {{marginRight: 40}}>
            <Button title = "Activate QR" color= {'green'} onPress={this.FindRecord} />
          </View>
          <Button title = "Terminate QR" color={'#FF0000'} onPress={this.DeleteRecord}/>
        </View>
        </ImageBackground>
      </View>
    )
  }
};
