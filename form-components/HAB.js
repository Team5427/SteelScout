import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Trapezoid from './shapes/Trapezoid';
class HAB extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.welcome}>HAB</Text>
        <Trapezoid/>
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

export default connect(mapStateToProps, matchDispatchToProps)(HAB);