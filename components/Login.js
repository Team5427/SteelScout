import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage, authenticate} from '../actions/actions.js';
import {bindActionCreators} from 'redux';

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
            <TextInput style = {styles.form} placeholder="Password" onChangeText={(password) => this.setState({password})}/>
          </View>
          </View>
          <Button title = "Enter" onPress = {() => {this.props.authenticate(this.state.username, this.state.password); this.props.changeCurPage("ScoutDashboard");} }/>
          <Button title = "Forgot Credentials" onPress = {() => {this.props.changeCurPage("ForgotPass")}}/>
          <Button title = "Sign Up" onPress = {() => {this.props.changeCurPage("SignUp")}}/>
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
            auth: state.auth,
            curPage: state.curPage,
        }
    }

    function matchDispatchToProps(dispatch){
        return bindActionCreators(
          {
            changeCurPage: changeCurPage,
            authenticate: authenticate,
          }
          , dispatch);
    }
export default connect(mapStateToProps, matchDispatchToProps)(Login);