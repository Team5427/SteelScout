import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
export default class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
      }
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>SignUp</Text>
          <View style={{ backgroundColor: '#FDFEFE' }}>
            <TextInput style = {styles.form} placeholder="Username" onChangeText={(username) => this.setState({username})}/>
          </View>
          <View style={{ backgroundColor: '#FDFEFE' }}>
            <TextInput style = {styles.form} placeholder="Password" onChangeText={(password) => this.setState({password})}/>
          </View>
          <View style={{ backgroundColor: '#FDFEFE' }}>
            <TextInput  style = {styles.form} placeHolder = 'email'onChangeText={(email) => this.setState({email})}/>
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
      form:{
        height: 40,
      }
    });
    