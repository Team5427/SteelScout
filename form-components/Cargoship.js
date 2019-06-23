import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Square from './shapes/Square';
import Rectangle from './shapes/Rectangle';
import Ellipse from './shapes/Ellipse';

class Cargoship extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.welcome}>CargoShip</Text>
        <View style = {{flex: 2,flexDirection: 'column' }}>
          <Square color = 'red' size = {100}/>
          <Rectangle color = 'blue' h = {100} w = {200} 
          c = {
            <View style = {{flex: 3, flexDirection: "row"}}>
              <Ellipse color = 'black' h = {50} w = {50}/>
              <Ellipse color = 'black' h = {50} w = {50}/>
            </View>
          }/>
        </View>
        </View>
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
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
      color: "#99aab5",
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
    }
  });
  
  function mapStateToProps(state){
    return{
        // username: state.auth.username,
        // password: state.auth.password,
        curPage: state.curPage,
    }
  }

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeCurPage: changeCurPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Cargoship);