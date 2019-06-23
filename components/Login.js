import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,StatusBar, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage, authenticate} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import {Input, Button, ThemeProvider} from 'react-native-elements';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            isFocused:false,
        }
    }
    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    
  

    render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;

    const theme = {
      colors: {
        primary: '#2c2f33',
        color:'red'
      
      }
    }

    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? 20 : 14,
      color: !isFocused ? '#aaa' : '#000',
    };
      return (
        <SafeAreaView style={styles.safeArea} behavior="padding" enabled>

          <View style={styles.container}>
            <StatusBar hidden = {true}/>
            <Text style={styles.welcome}>Login</Text>
          </View>
          
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          
            <TextInput style = {styles.form} underlineColorAndroid='transparent' placeholder="          Username          " onChangeText={(username) => this.setState({username})}/>
          </View>


          <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 30}}>
            <TextInput style = {styles.form}  underlineColorAndroid='transparent'  placeholder="          Password          " onChangeText={(password) => this.setState({password})}/>
          </View>

          <ThemeProvider theme={theme} >
            <Button style= {{backgroundColor:'orange'}} title = "Forgot Credentials?" titleStyle={{color:'#1974E5'}} onPress = {() => {this.props.changeCurPage("ForgotPass")}}/>
          </ThemeProvider>
          

          <View style = {{width:'50%', marginTop:40, marginLeft: (Dimensions.get('screen').width/4)}}>           
            <Button title = "Enter" onPress = {() => {this.props.authenticate(this.state.username, this.state.password); this.props.changeCurPage("ScoutDashboard");} } /> 
          </View>
        </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
      welcome: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#99aab5",
        marginTop:130,
        marginBottom:60,
      },
      instructions: {
        textAlign: 'center',
        color: '#99aab5',
        marginBottom: 5,
      },
      form:{
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: '#1974E5', 
        borderRadius: 20 ,
        backgroundColor : '#2c2f33',
        
        
      },
      safeArea: {
        flex: 1,
        backgroundColor: '#2c2f33'
      },
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