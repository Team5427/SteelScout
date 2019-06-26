import React, {Component} from 'react';

import {Platform, StyleSheet, TextInput, View, Button} from 'react-native';

class Counter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                
                <View style={{flex:2}}>
                    <Button title='-'/>
                </View>
                <View style={{flex:2, height:'80%'}}>
                    <TextInput style = {styles.form}  underlineColorAndroid='transparent'  placeholder="0" />
                </View>
                <View style={{flex:2}}>
                    <Button title='+'/>
                </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    form:{
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#1974E5', 
      borderRadius: 10 ,
      backgroundColor : '#2c2f33',
      
      
    },
  });
  
export default Counter;