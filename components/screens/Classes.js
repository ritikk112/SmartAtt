import * as React from "react";
import { ImageBackground, Text, View, ScrollView, Image, StyleSheet, useState } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {Table, Row, Rows} from 'react-native-table-component';
import {Picker} from '@react-native-picker/picker';

export default class Accounts extends React.Component{
  render(){
    const first = ['\t\t\t\t\t\t\t\t\tEMFT', '\t\t\t\t\t\t\t\t\t10 - 11']
    const second = ['\t\t\t\t\t\t\t\t\t\tITA', '\t\t\t\t\t\t\t\t\t11 - 12']
    const third = ['\t\t\t\t\tSociology of Media', '\t\t\t\t\t\t\t\t\t 12 - 1']
    const fourth = ['\t\t\t\t\t\t\t\t\tLaser', '\t\t\t\t\t\t\t\t\t  1 - 2']
    const fifth = ['\t\t\t\t\t\t\t\tIOT Lab', '\t\t\t\t\t\t\t\t\t  3 - 5']
    return(
      <View style = {{ flex: 4, flexDirection: 'column', padding: 20}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}> */}
        <Picker style = {{padding: 2, marginTop: 30}}>
          <Picker.Item label="Monday" value="day" />
          <Picker.Item label="Tuesday" value="day" />
          <Picker.Item label="Wednesday" value="day" />
          <Picker.Item label="Thrusday" value="day" />
          <Picker.Item label="Friday" value="day" />
        </Picker>
        <FontAwesome5 name = 'calendar-alt' size = {60} style = {{padding: 35, marginLeft: 115, marginTop: -10}} />
        <Table style= {{justifyContent: 'center'}} borderStyle = {{borderRadius: 30, borderWidth: 2, borderColor: '#006D5B', flex: 20}}>
          <Row data = {first} style = {{backgroundColor: '#1EA1A1'}}/>
          <Row data = {second} />
          <Row data = {third} style = {{backgroundColor: '#1EA1A1'}}/>
          <Row data = {fourth} />
          <Row data = {fifth} style = {{backgroundColor: '#1EA1A1'}}/>
        </Table>
        {/* </ImageBackground> */}
      </View>
    )
  }
};
