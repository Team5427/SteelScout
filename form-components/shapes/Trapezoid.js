import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Trapezoid extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{   
                width: 200,
                height: 0,
                borderBottomWidth: this.props.h,
                borderBottomColor: 'red',
                borderLeftWidth: 50,
                borderLeftColor: 'transparent',
                borderRightWidth: 50,
                borderRightColor: 'transparent',
                borderStyle: 'solid'
                        }} >
                        {this.props.c}
                        </View>
        );
    }
}

