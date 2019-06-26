import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Dimensions, StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage, updateColor, updateTeam, updateMatch, updateSide} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Counter from './shapes/Counter';
import {Button} from 'react-native-elements';

class FieldInfo extends Component {
  render() {
    return (

        <SafeAreaView style={styles.safeArea}>
           <StatusBar hidden = {true}/>
          <Text style={styles.textBoxed}>General Info</Text>

            <View>
                <TextInput placeholder = "TEAM #" onChangeText={(team) => this.props.updateTeam(team)}/>
            </View>
            <View>
                <TextInput placeholder = "ROUND #" onChangeText={(match) => this.props.updateMatch(match)}/>
            </View>
          
            <View style = {{flex: 1, flexDirection:"row", borderWidth:1, borderColor: this.props.scout.color?this.props.scout.color: "white",}}>
                <Button title = "RED" style = {{color: this.props.scout.color}} onPress = {() => {this.props.updateColor("red")}}/>
                <Button title = "BLUE" style = {{color: this.props.scout.color}} onPress = {() => {this.props.updateColor("blue")}}/>
            </View>


        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#23272a',
    },
    textBoxed: {
      fontSize: 40,
      fontWeight: 'bold',
      borderWidth:1,
      borderColor:'#1974E5',
      color: "#99aab5",
      textAlign: 'center',
    },
    textBoxedSmall: {
      fontSize: 27,
      fontWeight: 'bold',
      borderWidth:0,
      borderColor:'#1974E5',
      color: "#99aab5",
      textAlign: 'center',
    },
    
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#99aab5',
      marginBottom: 5,
    },
    signUpButton:{
      margin: 10,
    },
    logInButton:{
      margin: 10,
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#2c2f33'
    },
    form:{
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#1974E5', 
      borderRadius: 10 ,
      backgroundColor : '#2c2f33',
      
      
    },
  });
  
  function mapStateToProps(state){
    return{
        // username: state.auth.username,
        // password: state.auth.password,
        curPage: state.curPage,
        scout: state.scout,
    }
  }

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      changeCurPage: changeCurPage,
      updateSide,
      updateColor,
      updateMatch,
      updateTeam,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FieldInfo);