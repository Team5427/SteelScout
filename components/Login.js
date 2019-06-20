import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    }

    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.container}>
          <Text style={styles.welcome}>Login</Text>
          <View style={{ backgroundColor: '#FDFEFE' }}>
            <TextInput style = {styles.form} placeholder="Username" onChangeText={(username) => this.setState({username})}/>
          </View>
          <View style={{ backgroundColor: '#FDFEFE' }}>
            <TextInput style = {styles.form} placeholder="Password" onChangeText={(username) => this.setState({username})}/>
          </View>
          </View>
          <Button title = "Log In" onPress = {() => {}}/>
          <Button title = "Forgot Credentials" onPress = {() => {}}/>
          <Button title = "Sign Up" onPress = {() => {}}/>
        </KeyboardAvoidingView>
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
    
    function mapStateToProps(state){
        return{
            // username: state.auth.username,
            // password: state.auth.password,
            page: state.curPage,
        }
    }

    function mapDispatchToProps(){
        return{
            
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Login);