import { disableErrorHandling } from 'expo';
import * as React from 'react'
import {ImageBackground, Button, Text, View, StyleSheet } from 'react-native';
import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScanner from '../QRScanner';
import Location from './Location';
import HomeScreen from './Home';
import { FontAwesome5 } from '@expo/vector-icons';

const image = { uri: "https://i.pinimg.com/736x/77/bf/47/77bf47ef053709ad8c48d443c193af62.jpg" };

global.Name = 'Ritik Shukla';

const Stack = createNativeStackNavigator();

export default class Accounts extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
        Entity:'',
        Name2:Name,
    };
    }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style = {styles.container}>
                        <FontAwesome5 name='user-alt' size={45} style = {{marginLeft: 50, marginTop: 80, marginBottom: 30}}/>
                        <Text style = {{fontSize : 18,marginTop: 105, marginLeft: 10, color: 'black'}}>
                            {this.state.Name2}
                        </Text>
                    </View>
                    <View style = {styles.buttons}>
                        <View style = {{marginBottom: 1}}>
                            <Button title = "Edit Profile"
                                color={'#006D5B'}
                            />
                        </View>
                        <View style = {{marginBottom: 2}}>
                            <Button title = "Delete Account"
                            color={'#1EA1A1'}
                            />
                        </View>
                        <View style = {{marginBottom: 10}}>
                            <Button title = "Show Details"
                                color={'#006D5B'}
                            />
                        </View>
                    </View>
                    <View style = {styles.buttons}>
                        <View style = {{marginTop: 50}}>
                            <Button title = "Log Out"
                                color={'#FF0000'}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }    

};

const styles = StyleSheet.create({
    buttons: {
        flex: 10,
        justifyContent: 'flex-start',
        margin: 30,
        marginTop: 150,
    },
    container: {
      flex: 1,
      flexDirection: 'row', 
      flexWrap: "wrap"
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  