import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, SafeAreaView,Dimensions, StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage, updateColor, updateTeam, updateMatch, updateSide, submitForm, logout} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Counter from './shapes/Counter';
import {Button} from 'react-native-elements';


class FieldInfo extends Component {
  render() {
    return (

        <SafeAreaView style={styles.safeArea}>
          <StatusBar hidden = {true}/>
          <Text style={styles.textBoxed}>General Info</Text>


          <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 10}}>
            <TextInput style = {styles.form}  underlineColorAndroid='transparent'  placeholder = "TEAM #" onChangeText={(team) => this.props.updateTeam(team)}/>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 10}}>
            <TextInput style = {styles.form} placeholder = "ROUND #" onChangeText={(match) => this.props.updateMatch(match)}/>
          </View>
          
          <View style = {{ marginTop:20,marginBottom:20,flexDirection:"row", borderWidth:3, borderColor: this.props.scout.color?this.props.scout.color: "white"}}>
            
            <View style={{flex:2}}>
              <TouchableOpacity activeOpacity={1} title = "RED" style = {[styles.button,{backgroundColor:'red'}]} onPress = {() => {this.props.updateColor("red")}}>
                <Text style={{color:'black',fontSize:30}}> RED </Text>                  
              </TouchableOpacity>
            </View>

            <View style={{flex:2}}>
              <TouchableOpacity activeOpacity={1} title = "BLUE" style = {[styles.button,{backgroundColor:'#2196F3'}]} onPress = {() => {this.props.updateColor("#2196F3")}}>
                <Text style={{color:'black',fontSize:30}}> BLUE </Text>
              </TouchableOpacity>
            </View>
          
          </View>

          

          <View style = {{flexDirection:"row", borderWidth:1, borderColor:this.props.scout.color?this.props.scout.color: "white", marginBottom:20}}>
         
            <View style={{flex:2}}>
              <TouchableOpacity activeOpacity={.8} style = {styles.button} title='Left'  onPress = {() => {this.props.updateSide("Left")}}>
                <Text style={{color:'black',fontSize:15}}> Left </Text>
              </TouchableOpacity>
            </View>  

            <View style={{flex:2}}>
              <TouchableOpacity activeOpacity={.8} style = {styles.button} title='Center' onPress = {() => {this.props.updateSide("Center")}}>
                <Text style={{color:'black',fontSize:15}}> Center </Text>
              </TouchableOpacity>
            </View>  

            <View style={{flex:2}}>
              <TouchableOpacity activeOpacity={.8} style = {styles.button} title='Right'  onPress = {() => {this.props.updateSide("Right")}}>
              <Text style={{color:'black',fontSize:15}}> Right </Text>
              </TouchableOpacity>
            </View>  
            
          </View>

          <Text style={styles.textBoxed}>{this.props.scout.side?this.props.scout.side:"?"}</Text>


          <View style = {{width:'50%', marginLeft: (Dimensions.get('screen').width/4), marginTop: 10}}>           
            <Button title = "SUBMIT FORM" onPress = {() => {this.props.submitForm(this.props.scout)}} /> 
          </View>



          
          <View  style={{justifyContent:'flex-end', flex:1}}>
            <Button title = "Log Out" onPress = {() => {this.props.logout()}}/>
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
    button: {
      alignItems: 'center',
      backgroundColor: '#2196F3',
      padding: 10,
      height:100,
      justifyContent:'center',
      borderWidth:.5,
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
      submitForm,
      logout,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FieldInfo);