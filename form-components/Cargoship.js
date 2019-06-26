import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,SafeAreaView,Dimensions,TouchableOpacity, StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage,updateValue} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Square from './shapes/Square';
import Rectangle from './shapes/Rectangle';
import Counter from './shapes/Counter';
import Trapezoid from './shapes/Trapezoid';

class Cargoship extends Component {
  componentWillMount(){
    this.props.updateValue("CC",0);
    this.props.updateValue("CH",0);
  }

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

      <View style={{flexDirection:'row', marginTop:30}}>

       <View style={{flex:1}}>
         <Text style={[styles.textBoxed,{justifyContent:'flex-start'}]}>Cargo</Text>
       </View>

       


       <View style={{flex:1}}>
         <Text style={[styles.textBoxed,{justifyContent:'flex-end'}]}>Hatch</Text>
       </View>

      </View>



      <View style={{flexDirection:'row', marginTop:30}}>
        <View style={{flex:2, height:'80%'}}>
          <TextInput style = {styles.form}  underlineColorAndroid='transparent'  placeholder={""+this.props.scout.values["CC"]} />
        </View>
        <View style={{flex:2, height:'80%'}}>
          <TextInput style = {styles.form}  underlineColorAndroid='transparent'  placeholder={""+this.props.scout.values["CH"]} />
        </View>
      </View>






      




      <View style={{ marginTop:30, justifyContent:'center'}}>

       <Trapezoid  w={Dimensions.get('screen').width} bw={60} lw={70} rw={70}   c = {
            <Text style={{textAlign:'center', color:'white'}}>CargoShip</Text>
        }/>

      </View>


      <View style={{ alignItems:'center', flexDirection:'row'}}>

       <Rectangle  w={Dimensions.get('screen').width/2}  h={150}   color='black'     c = {
            <View flexDirection='row' style={{borderTopWidth:.5 }}>
              
              <View style={{flex:2, borderRightWidth:.5, borderColor:'black'}}>
                <TouchableOpacity activeOpacity={.8} style={styles.button} onPress = {() => {this.props.updateValue("CC", this.props.scout.values["CC"]-1)}}>
                  <View>
                    <Text style={{color:'black',fontSize:30}}> - </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{flex:2, borderRightWidth:.5, borderColor:'black'}}>
                <TouchableOpacity activeOpacity={.8} style={styles.button} onPress = {() => {this.props.updateValue("CC", this.props.scout.values["CC"]+1)}}>
                  <View>
                    <Text style={{color:'black',fontSize:30}}> + </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
        }/>
       <Rectangle  w={Dimensions.get('screen').width/2}  h={150}   color='black'     c = {
            <View flexDirection='row' style={{  borderTopWidth:.5}}>
             
              <View style={{flex:2, borderRightWidth:.5, borderColor:'black'}}>
                <TouchableOpacity activeOpacity={.8} style={styles.button} onPress = {() => {this.props.updateValue("CH", this.props.scout.values["CH"]-1)}}>
                  <View>
                    <Text style={{color:'black',fontSize:30}}> - </Text>
                  </View>
                </TouchableOpacity>
              </View>  

              <View style={{flex:2, borderRightWidth:.5, borderColor:'black'}}>
                <TouchableOpacity activeOpacity={.8} style={styles.button} onPress = {() => {this.props.updateValue("CH", this.props.scout.values["CH"]+1)}}>
                  <View>
                    <Text style={{color:'black',fontSize:30}}> + </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        }/>
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
    height:150,
    borderColor:'#2196F3',
    justifyContent:'center',
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
      updateValue,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Cargoship);