import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Dimensions, Picker,StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage, updateClimb, updateDescend} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Square from './shapes/Square';
import {Button} from 'react-native-elements';
import Trapezoid from './shapes/Trapezoid';
import { TouchableOpacity } from 'react-native';


class HAB extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>

        <StatusBar hidden = {true}/> 
        
      
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text style={[styles.textBoxed,{justifyContent:'flex-end'}]}>Lvl 2 Descend</Text>
          </View>
        </View>


        <View style={{marginBottom:50, width:'50%',borderRadius:5,  marginLeft: (Dimensions.get('screen').width/4)}} >
          <Button title='Yes' onPress = {() => {this.props.updateDescend("YES")}}/>
        </View>
      

        <View style={{marginBottom:80, width:'50%',  marginLeft: (Dimensions.get('screen').width/4)}}>
          <Button title='No' onPress = {() => {this.props.updateDescend("NO")}}/>
        </View>


        <Text style={styles.textBoxed}>Hab Climb</Text>
      

        <View style={{alignItems:'center', flexDirection:'column'}}>

          <TouchableOpacity activeOpacity={.8} onPress = {() => {this.props.updateClimb("Level 3")}}>
            <Trapezoid  w={150} bw={40} lw={45} rw={45}  c = {
                <Text style={{textAlign:'center', color:'white'}}>Lvl 3</Text>
            }/>
          </TouchableOpacity>
        
          <TouchableOpacity activeOpacity={.8} onPress = {() => {this.props.updateClimb("Level 2")}}>
            <Trapezoid  w={240} bw={40} lw={45} rw={45}  c = {
              <Text style={{textAlign:'center', color:'white'}}>Lvl 2</Text>
            }/>
          </TouchableOpacity>
        
          <TouchableOpacity activeOpacity={.8} onPress = {() => {this.props.updateClimb("Level 1")}}>
            <Trapezoid  w={330} bw={40} lw={45} rw={45} c = {
              <Text style={{textAlign:'center', color:'white'}}>Lvl 1</Text>
            }/>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.8} onPress = {() => {this.props.updateClimb("None")}}>
            <Trapezoid  w={420} bw={40} lw={45} rw={45} onPress = {() => {this.props.updateClimb("None")}}  c = {
              <Text style={{textAlign:'center', color:'white'}}>None</Text>
            }/>
          </TouchableOpacity>
            
        </View>
         

        <View style={{flexDirection:'row'}}>

          <View style={{flex:1}}>
            <Text style={[styles.textBoxed, {justifyContent:'flex-start'}]}>{this.props.scout.climb?this.props.scout.climb:"?"}</Text>
          </View>

          <View style={{flex:1}}>
              <Text style={[styles.textBoxed, {justifyContent:'flex-end'}]}>{this.props.scout.descend?this.props.scout.descend:"?" }</Text>
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
      updateClimb: updateClimb,
      updateDescend: updateDescend,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HAB);