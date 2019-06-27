import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,SafeAreaView,Dimensions, StatusBar,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {changeCurPage} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import Counter from './shapes/Counter';
import {Button} from 'react-native-elements';
import Ellipse from './shapes/Ellipse';
import Rectangle from './shapes/Rectangle';
import Triangle from './shapes/Triangle';
import Square from './shapes/Square';





class Rocket extends Component {
  render() {
    return (

        <SafeAreaView style={styles.safeArea}>

          <StatusBar hidden = {true}/>
          <Text style={styles.textBoxed}>Rocket</Text>

          <View style={{flexDirection:'row'}}>

            <View style={{flex:1}}>
              <Text style={[styles.textBoxed,{justifyContent:'flex-start'}]}>Cargo</Text>
            </View>

            <View style={{flex:1}}>
              <Text style={[styles.textBoxed,{justifyContent:'flex-end'}]}>Hatch</Text>
            </View>

          </View>


          <View style={{flexDirection:'row'}}>

            <Counter name = "RC3"/>

            <View style={{flex:1,height:'10%'}}>
              <Text style={[styles.textBoxedSmall]}>Lvl 3</Text>
            </View>

            <Counter name = "RH3"/>  

          </View>
           

          <View style={{flexDirection:'row'}}>

            <Counter name = "RC2"/>

            <View style={{flex:1,height:'10%'}}>
                <Text style={[styles.textBoxedSmall]}>Lvl 2</Text>
            </View>

            <Counter name = "RH2"/>

          </View>


          <View style={{flexDirection:'row'}}>

            <Counter name = "RC1"/>

              <View style={{flex:1,height:'10%'}}>
                <Text style={[styles.textBoxedSmall]}>Lvl 1</Text>
              </View>

            <Counter name = "RH1"/>

          </View>


        <View style={{flexDirection:'column', alignItems:'center'}}>

          <Triangle  lw={50} rw={50} h={70} color='red' />

          <Rectangle w={100} h={70} color='#23272a'  c={
            <View style={{marginTop:5,alignItems:'center'}}>
              <Ellipse w={50} h={50} color='black' c={
                <View style={{marginTop:15,alignItems:'center'}}>
                  <Text style={{textAlign:'center', color:'white',fontSize:15}}>Lvl 3</Text>
                </View>
              }/>
            </View>         
          }/>
          
        </View>


        <View style={{flexDirection:'row',justifyContent:'center'}}>

          <Triangle lw={50} rw={0} h={70} color='red' />

          <Rectangle w={100} h={70} color='#23272a'  c={
            <View style={{marginTop:5,alignItems:'center'}}>
              <Ellipse w={50} h={50} color='black' c={
                <View style={{marginTop:15,alignItems:'center'}}>
                  <Text style={{textAlign:'center', color:'white',fontSize:15}}>Lvl 2</Text>
                </View>
              }/>
            </View>         
          }/>

          <Triangle lw={0} rw={50} h={70} color='red' />
          
        </View>


        <View style={{flexDirection:'row',justifyContent:'center'}}>
     
          <Triangle lw={50} rw={0} h={70} color='red' />
          <Rectangle w={50} h={70} color='red' />
            
          <Rectangle w={100} h={70} color='#23272a'  c={
            <View style={{marginTop:5,alignItems:'center'}}>
              <Ellipse w={50} h={50} color='black' c={
                <View style={{marginTop:15,alignItems:'center'}}>
                  <Text style={{textAlign:'center', color:'white',fontSize:15}}>Lvl 1</Text>
                </View>
              }/>
            </View>         
          }/>
         
          <Rectangle w={50} h={70} color='red' />
          <Triangle lw={0} rw={50} h={70} color='red' />
          
        </View>






        <View style={{flexDirection:'row',justifyContent:'center'}}>

          <Rectangle w={100} h={50} color='red' />

          <Rectangle w={100} h={70} color='#23272a' c={
            <View style = {styles.container2}>
              <Image source={require('./images/SteelPic.jpg')} style ={styles.icon}/>
            </View>}
           />

          <Rectangle w={100} h={50} color='red' />
          
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
    container2: {
      flex:0,
      alignItems : 'center',
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
    icon:
  {
    width: 50,  
    height: 50,
    borderRadius : 50/2,
    
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

export default connect(mapStateToProps, matchDispatchToProps)(Rocket);