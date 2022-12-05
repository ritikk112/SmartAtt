import * as React from "react";
import { Button, ImageBackground, Text, View, ScrollView, Image, StyleSheet, useState } from "react-native";
import {Picker} from '@react-native-picker/picker';

const image = { uri: "https://i.pinimg.com/736x/77/bf/47/77bf47ef053709ad8c48d443c193af62.jpg" };

export default class ForFaculty extends React.Component{
  constructor(props){
    super(props);
    this.state={Findinga:''};
  }
  FindRecord=()=>
  {
      // alert('Entered FindRec');
      var Findinga = 'temping';
      var InsertAPIURL = "http://10.0.2.2:80/api/tabling2.php";
      
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
      // alert('Entered DelRec');
      var InsertAPIURL = "http://10.0.2.2:80/api/tabling.php";
      
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
