import React, {Component} from 'react';
import { Button, colors, ThemeProvider } from 'react-native-elements';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Trapezoid extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{   
                width: this.props.w,
                height: 0,
                borderBottomWidth: this.props.bw,
                borderBottomColor: '#2196F3',
                borderLeftWidth: this.props.lw,
                borderLeftColor: 'transparent',
                borderRightWidth: this.props.rw,
                borderRightColor: 'transparent',
                        }} >
                        {this.props.c}
                        </View>
        );
    }
}

