import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Dimensions, StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Square from './shapes/Square';
import Rectangle from './shapes/Rectangle';
import Counter from './shapes/Counter';
import {Button} from 'react-native-elements';

class Cargoship extends Component {
  render() {
    return (
        
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden = {true}/>
      <Text style={styles.textBoxed}>Cargo Ship</Text>

      {/*<View style={styles.container}>
        <Text style={styles.welcome}>CargoShip</Text>
        <View style = {{flex: 2,flexDirection: 'column' }}>
          <Square color = 'red' size = {100}/>
          <Rectangle color = 'blue' h = {100} w = {200} 
          c = {
            <View style = {{flex: 3, flexDirection: "row"}}>
              <Ellipse color = 'black' h = {50} w = {50}/>
              <Ellipse color = 'black' h = {50} w = {50}/>
            </View>
          }/>
        </View>
        </View>*/}

      <View style={{flexDirection:'row'}}>

       <View style={{flex:1}}>
         <Text style={[styles.textBoxed,{justifyContent:'flex-start'}]}>Cargo</Text>

         
       </View>

       <View style={{flex:1}}>
         <Text style={[styles.textBoxed,{justifyContent:'flex-end'}]}>Hatch</Text>
       </View>

      </View>






      <View style={{flexDirection:'row'}}>

      <Counter/>


          

        <Counter/>
                
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

export default connect(mapStateToProps, matchDispatchToProps)(Cargoship);