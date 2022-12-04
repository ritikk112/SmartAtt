import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as acc from './Accounts';
// import * as funcc from './Location';
import QrScanner from '../QRScanner';
import {Tempfunc} from './Accounts';
import Location from './Location'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={acc.default.Tempfunc3}
      />
      <Button 
        title="Go to function"
        onPress={acc.func2}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
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
      return (
        <>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Qr" component={QrScanner} />
            <Stack.Screen name="Loc" component={Location} />
          </Stack.Navigator>
        </>
      );
    }
};
