import * as React from "react";
import { ImageBackground, Text, View, ScrollView, Image, StyleSheet, useState } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {Table, Row, Rows} from 'react-native-table-component';
import {Picker} from '@react-native-picker/picker';
import XTable from '../Table';

export default class Accounts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedDay: 'Monday',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday']
    }
  }
  render(){
    const tableData = {
      // columns: ['Subject', 'Attendance'],
      data: [['DSA', `${Math.ceil(Math.random()*9)}-${Math.ceil(Math.random()*9)}`], ['ITA', `${Math.ceil(Math.random()*9)}-${Math.ceil(Math.random()*9)}`], ['EMFT', `${Math.ceil(Math.random()*9)}-${Math.ceil(Math.random()*9)}`], ['Laser', `${Math.ceil(Math.random()*9)}-${Math.ceil(Math.random()*9)}`], ['DSA Lab', `${Math.ceil(Math.random()*9)}-${Math.ceil(Math.random()*9)}`]]
    }
    return(
      <View style = {{ flex: 4, flexDirection: 'column', padding: 20}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}> */}
        <Picker
          selectedValue={this.state.selectedDay}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({selectedDay: itemValue})
          }>
            {this.state.days.map((day, index) => {
              return <Picker.Item label={day} value={day} key={index}/>
            })
            }
        </Picker>
        <FontAwesome5 name = 'calendar-alt' size = {60} style = {{padding: 35, marginLeft: 115, marginTop: -10}} />
        {/* </ImageBackground> */}
        <XTable  tableData={tableData}/>
      </View>
    )
  }
};
