import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateValue} from '../../actions/actions';
import {bindActionCreators} from 'redux';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: 0,
        }
    }
    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:2}}>
                    <Button title='-' onPress = {() => {this.setState({value: this.state.value-1,})}}/>
                </View>
                <View style={{flex:2, height:'80%'}}>
                    <Text style = {styles.form}  underlineColorAndroid='transparent' >{this.state.value}</Text>
                </View>
                <View style={{flex:2}}>
                    <Button title='+' onPress = {() => {this.setState({value: this.state.value+1,})}}/>
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
      color: "#99aab5",
    },
  });

  function mapStateToProps(state){
    return{
      scout: state.scout,
    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({updateValue: updateValue}, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);