import { disableErrorHandling } from 'expo';
import * as React from 'react'
import { Button, Text, View, StyleSheet, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

global.variabble = 0;

export const Tempfunc2=()=>
{
    alert('Function2 called');
}

export function func2(){
    // Num = Num+1;
    alert('Value is '+variabble);

}

export default class Accounts extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={RollNo:'',StudentName:'',Course:'',Findinga:'',Findingb:''};
    }
    Tempfunc3=()=>
    {
        alert('Function3 called');
        variabble = variabble+1;
    }
    FindRecord=()=>
    {
        var Findinga = this.state.Findinga;
        var Findingb = this.state.Findingb;

        if(Findinga.length==0 || Findingb.length==0){
            alert("Required Field is missing");
        }
        else{
            var InsertAPIURL = "http://10.0.2.2:80/api/srch.php";
            
            var headers={
                'Accept':'*/*',
                'Content-Type':'application/json'
            };
            
            var Data={
                Findinga:Findinga,
                Findingb:Findingb
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
                    alert("No Error "+response.Message);
                })
                .catch((error)=>
                {
                    alert("Error: "+error);
                })
        }
        Keyboard.dismiss();
    }
    InsertRecord=()=>
    {
        var RollNo = this.state.RollNo;
        var StudentName = this.state.StudentName;
        var Course = this.state.Course;

        if(RollNo.length==0 || StudentName.length==0 || Course.length==0){
            alert("Required Field is Missing");
        }
        else{
            var InserAPIURL = "http://10.0.2.2:80/api/insert.php";
            
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            
            var Data={
                RollNoo:RollNo,
                StudentNamee:StudentName,
                Coursee:Course
            };
            fetch(InserAPIURL,
                {
                    method:'POST',
                    headers:headers, 
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                })
                .catch((error)=>
                {
                    alert("Error: "+error);
                })
        }
        Keyboard.dismiss();
    }
    render (){
    return (
        <View style = {styles.ViewStyle}>
            <TextInput 
                placeholder={"Search"}
                style={StyleSheet.txtStyle}
                onChangeText={Findinga=>this.setState({Findinga})}
            />
            <TextInput placeholder={"Name"}
                style={StyleSheet.txtStyle}
                onChangeText={Findingb=>this.setState({Findingb})}
            />
            <Button 
                title={"Find Record"}
                onPress={this.FindRecord}
            />
            <TextInput 
                placeholder={"Enrollment Number"}
                style={StyleSheet.txtStyle}
                onChangeText={RollNo=>this.setState({RollNo})}
            />
            <TextInput 
                placeholder={"Name"}
                style={StyleSheet.txtStyle}
                onChangeText={StudentName=>this.setState({StudentName})}
            />
            <TextInput 
                placeholder={"Course"}
                style={StyleSheet.txtStyle}
                onChangeText={Course=>this.setState({Course})}
            />
            <Button
                title={"Save"}
                onPress={this.InsertRecord}
            />
            <Button 
                title={"PressMe"}
                onPress={this.Tempfunc3}
            />
        </View>
    )
    }
};
const styles=StyleSheet.create({
    ViewStyle:
    {
        flex:1,
        padding:20,
        marginTop:10
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'red',
        marginBottom:20
    }
})