import { disableErrorHandling } from 'expo';
import * as React from 'react'
import {ImageBackground, Button, Text, View, StyleSheet } from 'react-native';
import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScanner from '../QRScanner';
import Location from './Location';
import HomeScreen from './Home';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button as XButton, Avatar, Text as XText} from 'react-native-paper';

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
                {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
                    <View style = {styles.fontAContainer}>
                        <Avatar.Icon size={50} icon="account-outline" backgroundColor='#c1b8de' />
                        <View style={{borderLeftColor: '#333333b8', borderLeftWidth: 2, marginLeft: 10, paddingLeft: 10}}>
                            <XText variant="headlineSmall" style={{border: 1, color: '#333333'}}>{this.state.Name2}</XText>
                        </View>
                    </View>
                    <View style = {styles.buttons}>
                        <View style = {{marginBottom: 25}}>
                        <XButton icon="account-edit-outline" mode="outlined" onPress={() => console.log('Pressed')}>
                            Edit Profile
                        </XButton>
                        </View>
                        <View style = {{marginBottom: 25}}>
                            <XButton icon="delete-circle-outline" mode="outlined" onPress={() => console.log('Pressed')}>
                                Delete Account
                            </XButton>
                        </View>
                        <View style = {{marginBottom: 25}}>
                            <XButton icon="account-details-outline" mode="outlined" onPress={() => console.log('Pressed')}>
                                Show Details
                            </XButton>
                        </View>
                        <View style = {{marginBottom: 25}}>
                            <XButton icon="logout" mode="outlined" onPress={() => console.log('Pressed')}>
                                Logout
                            </XButton>
                        </View>
                    </View>
                {/* </ImageBackground> */}
            </View>
        );
    }    

};

const styles = StyleSheet.create({
    buttons: {
        flex: 10,
        justifyContent: 'flex-start',
        margin: 30,
        marginTop: 50,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 100,
    },
    fontAContainer: {
        flexDirection: 'row', 
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
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
  