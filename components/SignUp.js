import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
export default class SignUp extends Component {
    render() {
      return (
          <View style={styles.container}>
          <Text style={styles.welcome}>SignUp</Text>
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
    });
    