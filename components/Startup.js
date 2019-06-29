import React, {Component} from 'react';
import {AsyncStorage, Platform, StyleSheet, Text, View, Image, SafeAreaView, TextInput, Dimensions, StatusBar} from 'react-native';
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
            loading:true,
        }
    }

    async componentDidMount() {
        await this.init();
        this.setState({loading: false});
    }

    async init() {
        const email = await AsyncStorage.getItem("email");
        this.setState({username: email});
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

    return (
      <SafeAreaView style={styles.safeArea}>

        <View style = {styles.container}>
            <StatusBar hidden = {true}/>
            <Text style={[styles.welcome]}>Steel Scout</Text>
        </View>

        <View style = {styles.image}>
          <Image source={require('./images/icon.png')} style ={styles.icon}/>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:40}}>      
            <TextInput style = {styles.form} value={this.state.username} placeholderTextColor='white' autoCapitalize='none' underlineColorAndroid='transparent' keyboardType='email-address' placeholder="Username" onChangeText={(username) => this.setState({username})}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 30}}>
          <TextInput style = {styles.form} placeholderTextColor='white' secureTextEntry={true} autoCapitalize='none' underlineColorAndroid='transparent'  placeholder="Password" onChangeText={(password) => this.setState({password})}/>
        </View>

        <ThemeProvider theme = {theme}>
        
        <View style = {{width:'50%', marginTop:40, marginLeft: (Dimensions.get('screen').width/4)}}>           
            <Button title = "Log In" onPress = {() => {
              this.props.authenticate(this.state.username, this.state.password);} } /> 
        </View>

        <Text style = {{color: "red"}}>{JSON.stringify(this.props.auth.error)}</Text>
        
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
  },
  image: {
    flex:0,
    marginTop : 60,
    width: Dimensions.get('screen').width, 
    backgroundColor: 'black',
    alignItems : 'center',
  },
  icon:
  {
    width: 200,  
    height: 200,
  },
  welcome: {

    fontSize: 50,
    color: 'white',
    
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'black'
  },
  form:{
    textAlign: 'center',
    color: 'white',
    height: 40,
    width: 200,
    borderWidth: 2,
    borderColor: '#1974E5', 
    borderRadius: 5 ,
    backgroundColor : 'black',
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
