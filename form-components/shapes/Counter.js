import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateValue} from '../../actions/actions';
import {bindActionCreators} from 'redux';
import {Platform, StyleSheet,TouchableOpacity, Text, View, Button} from 'react-native';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:0,
        }
    }
    render(){
        var name = this.props.name;
        this.props.updateValue(name, this.state.value);
        //alert(name);
        //alert(this.props.scout.values["RC3"] ||this.props.scout.values.RC3)
        //var numb = this.props.scout.values[name]
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                
                <View style={{flex:2}}>
                  <TouchableOpacity title='-' activeOpacity={.8} style={styles.button} onPress = {() => {
                    this.props.updateValue(name,this.state.value-1);
                    this.setState({value: this.state.value-1})
                    }}>
                    <View>
                      <Text style={{color:'black',fontSize:20}}> - </Text>
                    </View>
                  </TouchableOpacity>
                </View>


                <View style={{flex:2, height:'100%'}}>
                    <Text style = {styles.form}  underlineColorAndroid='transparent' >{this.state.value}</Text>
                </View>


                <View style={{flex:2}}>
                  <TouchableOpacity title='+' activeOpacity={.8} style={styles.button} onPress = {() => {
                    this.props.updateValue(name, this.state.value+1)
                    this.setState({value: this.state.value+1})
                    //alert(JSON.stringify(this.props.scout.values))
                    }}>
                    <View>
                      <Text style={{color:'black',fontSize:20}}> + </Text>
                    </View>
                  </TouchableOpacity>
                </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({
    form:{
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#1974E5', 
      borderRadius: 10 ,
      backgroundColor : '#2c2f33',
      color: "#99aab5",
      fontSize:25,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#2196F3',
      height:40,
      borderColor:'#2196F3',
      justifyContent:'center',
    },
  });

  function mapStateToProps(state){
    //alert(JSON.stringify(state.scout));
    return{
      scout: state.scout,
      curPage: state.curPage,
    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({updateValue: updateValue}, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);