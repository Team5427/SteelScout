import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView, TextInput, Dimensions, StatusBar} from 'react-native';
import {changeCurPage, authenticate} from '../actions/actions.js';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {ThemeProvider,Button, Divider, Input } from 'react-native-elements';




class Startup extends Component {

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
        
        color:'red',
        height:'50%',
        width:'10%',
      
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

      <SafeAreaView style={styles.safeArea}>

        <View style = {styles.container}>
            <StatusBar hidden = {true}/>
            <Text style={[styles.welcome]}>Steel Scout</Text>
        </View>

        <View style = {styles.container2}>
          <Image source={require('./images/SteelPic.jpg')} style ={styles.icon}/>
        </View>

        
      <View style = {styles.container2}>
          <Text style={[styles.instructions]}>Official 5427 Steel Talons Scouting App!</Text>
        </View>
        
        <View style = {styles.container2}>
          <Text style={{fontSize:15}}> ────────  Welcome  ──────── </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:40}}>      
            <TextInput style = {styles.form} underlineColorAndroid='transparent' placeholder="          Username          " onChangeText={(username) => this.setState({username})}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 30}}>
          <TextInput style = {styles.form}  underlineColorAndroid='transparent'  placeholder="          Password          " onChangeText={(password) => this.setState({password})}/>
        </View>


        <ThemeProvider theme = {theme}>
      
        
        <View style = {{width:'50%', marginTop:40, marginLeft: (Dimensions.get('screen').width/4)}}>           
            <Button title = "Log In" onPress = {() => {
              this.props.authenticate(this.state.username, this.state.password);} } /> 
        </View>
        
     </ThemeProvider>
      
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0,
    width: Dimensions.get('screen').width, 
    backgroundColor: '#1974E5',
    alignItems : 'center',
    borderBottomWidth : 1,
    borderBottomColor : 'gray',
  },
  container2: {
    flex:0,
    marginTop : 60,
    width: Dimensions.get('screen').width, 
    backgroundColor: '#2c2f33',
    alignItems : 'center',
  },
  icon:
  {
    width: 100,  
    height: 100,
    borderRadius : 150/2,
    backgroundColor: 'black',
  },
  welcome: {

    fontSize: 50,
    color: 'white',
    
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#2c2f33'
  },
  instructions: {
    fontSize: 20,
    color: 'black',
    
    textAlign: 'center',
    
  },
  form:{
    textAlign: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: '#1974E5', 
    borderRadius: 20 ,
    backgroundColor : '#2c2f33',
    
    
  },
  });
  
  function mapStateToProps(state){
    return{
        // username: state.auth.username,
        // password: state.auth.password,
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

export default connect(mapStateToProps, matchDispatchToProps)(Startup);