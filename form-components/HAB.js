import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Dimensions, Picker,StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Trapezoid from './shapes/Trapezoid';
import {Button} from 'react-native-elements';

class HAB extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden = {true}/>
        <Text style={styles.textBoxed}>HAB</Text>
      {/*
        <Text style={styles.welcome}>HAB</Text>
        <Trapezoid/> 
        */}

      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
         <Text style={[styles.textBoxed,{justifyContent:'flex-start'}]}>Hab Climb</Text>

         
       </View>

       <View style={{flex:1}}>
         <Text style={[styles.textBoxed,{justifyContent:'flex-end'}]}>Lvl 2 Descend</Text>
       </View>

      </View>



      <View style={{flexDirection:'row'}}>

          <View style={{flex:1}}>
              <Button title='Level 3'/>
          </View>

          <View style={{flex:1}}>
              <Button title='Yes'/>
          </View>

                
      </View>


      <View style={{flexDirection:'row'}}>

          <View style={{flex:1}}>
              <Button title='Level 2'/>
          </View>

          <View style={{flex:1}}>
              <Button title='No'/>
          </View>

                
      </View>


      <View style={{flexDirection:'row' ,width:'50%'}}>

          <View style={{flex:1}}>
              <Button title='Level 1'/>
          </View>                
      </View>

      <View style={{flexDirection:'row', width:'50%'}}>

          <View style={{flex:1}}>
              <Button title='None'/>
          </View>

                
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
    }
  }

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeCurPage: changeCurPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HAB);